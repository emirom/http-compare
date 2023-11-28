import { RestApiRequest } from '../../../restApiRequests';
import { store } from '../../../nextStore';

export const getCountries = async () => {
  const str = store;

  str &&
    str.setState((states) => ({
      ...states,
      countries: {
        ...states.countries,
        loader: true,
      },
    }));

  try {
    const res = await RestApiRequest({ url: 'prisma/countries/' });

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: [...states.countries.data, ...res?.data],
          loader: false,
        },
      }));

    const countries = res.data;

    let newCountries: any[] = [];

    for await (const country of countries) {
      const res = await RestApiRequest({
        url: `prisma/countries/${country.id}/provinces`,
      });
      let provinces = res.data;
      // let states = str ? str.getState() : null;
      // console.log({ states, res });
      // if (states) {
      //   states = {
      //     ...states,
      //     countries:
      //   }
      // }

      for await (const [index, province] of provinces.entries()) {
        const res = await RestApiRequest({
          url: `prisma/provinces/${province.id}/cities`,
        });
        provinces = [
          ...provinces.slice(0, index),
          { ...province, cities: res.data },
          ...provinces.slice(index + 1, provinces.length),
        ];
      }
      newCountries = [...newCountries, { ...country, provinces }];
    }

    console.log({ newCountries });

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: newCountries,
          loader: false,
        },
      }));

    return {
      data: res?.data,
      error: null,
      loader: false,
    };
  } catch (error: any) {
    str &&
      str.setState((states) => ({
        countries: {
          ...states.countries,
          error: error.message ? error.message : 'we have problem',
          loader: false,
        },
      }));

    return {
      data: [],
      error: error.message ? error.message : 'we have problem',
      loader: false,
    };
  }
};

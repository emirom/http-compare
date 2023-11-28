import { useEffect } from 'react';
import { TemplateLayout } from '../template/templateLayout';
import { getCountries, useStore } from 'fr-states';

export const TestRest = () => {
  const countries = useStore((state: any) => state.countries);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <TemplateLayout>
      {countries.loader && <div>is looooooading</div>}
      {countries.data.map((country: any) => (
        <>
          <h1>{country.name} </h1>
          {country.provinces &&
            country.provinces.map((province: any) => (
              <>
                <h3>{province.name} </h3>
                {province.cities &&
                  province.cities.map((city: any) => <h6>{city.name} </h6>)}
              </>
            ))}
        </>
      ))}
    </TemplateLayout>
  );
};

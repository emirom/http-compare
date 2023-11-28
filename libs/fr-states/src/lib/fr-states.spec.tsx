import { render } from '@testing-library/react';

import FrStates from './fr-states';

describe('FrStates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrStates />);
    expect(baseElement).toBeTruthy();
  });
});

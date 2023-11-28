import { render } from '@testing-library/react';

import FrShared from './fr-shared';

describe('FrShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrShared />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import CustomAppBar from './custom-app-bar';

describe('CustomAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomAppBar />);
    expect(baseElement).toBeTruthy();
  });
});

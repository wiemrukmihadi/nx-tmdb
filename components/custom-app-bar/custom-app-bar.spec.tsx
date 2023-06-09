import { render } from '@testing-library/react';

import CustomAppBar from './custom-app-bar';

describe('CustomAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CustomAppBar
        onSearchResult={(response) => {
          console.log(response);
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

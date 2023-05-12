import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useSearchQuery from './use-search-query';

describe('useSearchQuery', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useSearchQuery());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});

import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useQueryMovie from './use-query-movie';

describe('useQueryMovie', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useQueryMovie());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});

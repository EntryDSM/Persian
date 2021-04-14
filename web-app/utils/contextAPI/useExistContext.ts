import { Context, useContext } from 'react';

export function useExistContext<ContextValue>(
  context: Context<ContextValue | null>
): ContextValue {
  const state = useContext(context);

  if (!state) {
    throw new Error('SearchHistoryContext is null. 컨텍스트가 없습니다.');
  }

  return state;
}

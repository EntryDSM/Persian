import { createContext } from 'react';

export const GlobalContext = createContext<null>(null);

type Props = {
  children: JSX.Element;
};

export function GlobalProvider({ children }: Props) {
  return (
    <GlobalContext.Provider value={null}>{children}</GlobalContext.Provider>
  );
}

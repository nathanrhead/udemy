import { createContext } from 'react';

export const ThemeProviderContext = createContext<string | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  return <ThemeProviderContext.Provider value={'sasha'}>
    {children}
  </ThemeProviderContext.Provider>
}

export default ThemeProvider;

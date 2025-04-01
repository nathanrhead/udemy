import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({ children }) => {
  const [state, setState] = useState('Ian wuz ere');
  return (
  <GlobalContext.Provider value={{ state, setState}}> 
    {children}
  </GlobalContext.Provider>
  );
}

import { createContext } from 'react';

const LoadNavContex = createContext();

function LoadNavProvider({ children }) {
  const loadNav = {
    isLoading: 'Benar',
  };
  return (
    <LoadNavContex.Provider value={{ loadNav }}>
      {children}
    </LoadNavContex.Provider>
  );
}

export { LoadNavContex, LoadNavProvider };

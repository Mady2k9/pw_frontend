import { createContext, ReactNode, useContext, useState } from 'react';
interface IGlobalContextType {
  isSidebarOpen: boolean;
  toggleSidebar: (state: boolean) => void;
}


const GlobalContext = createContext<IGlobalContextType>({
  isSidebarOpen: false,
  toggleSidebar: async () => {},
});

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobal = (): IGlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within an GlobalProvider');
  }
  return context;
};

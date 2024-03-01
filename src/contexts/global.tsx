import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface IGlobalContextType {
  isSidebarOpen: boolean;
  userInteracted: boolean;
  toggleSidebar: (state: boolean) => void;
}


const GlobalContext = createContext<IGlobalContextType>({
  isSidebarOpen: false,
  userInteracted: false,
  toggleSidebar: async () => {
  },
});

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const triggerUserInteracted = () => {
    setUserInteracted(true);
  };
  useEffect(() => {
    ['click', 'mousemove', 'mouseover', 'mousemove', 'touchmove', 'focus'].forEach((eventName) => {
      window.addEventListener(eventName, triggerUserInteracted);
      setTimeout(() => {
        setUserInteracted(true);
      }, 10000);
      if (userInteracted) {
        window.removeEventListener(eventName, triggerUserInteracted);
      }
      return () => {
        window.removeEventListener(eventName, triggerUserInteracted);
      };
    });
  }, [userInteracted]);
  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        userInteracted,
        toggleSidebar,
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

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  fetchAndActivateConfig,
  firebaseConfigDynamicGetters,
  DefaultFirebaseConfig,
} from './index';
// Create a context with an undefined initial value
const FirebaseRemoteConfigContext = createContext<
  Partial<DefaultFirebaseConfig & { configLoaded: boolean }> | undefined
>(undefined);

interface Props {
  children: ReactNode;
}

// Provider component to fetch and provide remote config values to the app
export const FirebaseRemoteConfigProvider: React.FC<Props> = ({ children }) => {
  const [configLoaded, setLoaded] = useState(false);
  // Define a state object using the FirebaseRemoteConfigState interface
  const [state, setState] = useState<Partial<DefaultFirebaseConfig>>();
  // Use the useEffect hook to fetch and activate the remote config when the component is mounted
  useEffect(() => {
    (async () => {
      // Fetch and activate the remote config
      await fetchAndActivateConfig();
      setState(firebaseConfigDynamicGetters());
      setLoaded(true);
    })();
  }, []);
  return (
    <FirebaseRemoteConfigContext.Provider value={{ configLoaded, ...state }}>
      {children}
    </FirebaseRemoteConfigContext.Provider>
  );
};

// Custom hook to use the FirebaseRemoteConfigContext
export const useFirebaseRemoteConfig = (): Partial<
  DefaultFirebaseConfig & { configLoaded: boolean }
> => {
  const context = useContext(FirebaseRemoteConfigContext);

  if (context === undefined) {
    throw new Error(
      'useFirebaseRemoteConfig must be used within a FirebaseRemoteConfigProvider'
    );
  }

  return context;
};

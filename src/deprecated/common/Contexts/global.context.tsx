import { createContext, ReactElement, FC, useReducer, useContext } from 'react';
import { storage } from '@/deprecated/shared/Storage';
type ThemeTypes = 'DARK' | 'LIGHT';
type Language = 'en' | 'fr';
interface ConfigState {
  loggedIn: boolean;
  theme: ThemeTypes;
  language: Language;
}

type ConfigAction =
  | { type: 'LOGIN_STATUS_UPDATED'; value: boolean }
  | { type: 'THEME_UPDATED'; value: ThemeTypes }
  | { type: 'LANGUAGE_UPDATE'; value: Language };

const defaultConfig: ConfigState = {
  loggedIn: false,
  theme: 'LIGHT',
  language: 'en',
};

type ConfigContextState = {
  config: ConfigState;
  dispatch: React.Dispatch<ConfigAction>;
};

export const GlobalContext = createContext<ConfigContextState | undefined>(
  undefined
);

type ProviderProps = {
  children: ReactElement;
};

const configReducer = (
  state: ConfigState,
  action: ConfigAction
): ConfigState => {
  switch (action.type) {
    case 'LOGIN_STATUS_UPDATED':
      return { ...state, loggedIn: action.value };
    case 'THEME_UPDATED':
      return { ...state, theme: action.value };
    case 'LANGUAGE_UPDATE':
      return { ...state, language: action.value };
    default:
      return state;
  }
};

export const GlobalContextProvider: FC<ProviderProps> = (props) => {
  const [config, dispatch] = useReducer(configReducer, {
    ...defaultConfig,
    loggedIn: typeof window !== 'undefined' ? !!storage.get('TOKEN') : false,
  });

  return (
    <GlobalContext.Provider value={{ config, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('getConfig must be used within a GlobalContextProvider');
  }
  return context;
};

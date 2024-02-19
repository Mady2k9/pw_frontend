import { initializeApp } from 'firebase/app';
import {
  getRemoteConfig,
  fetchAndActivate,
  getString,
  getBoolean,
  getNumber,
  getValue,
} from 'firebase/remote-config';
import 'firebase/messaging';
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREABSE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

interface IFirebaseConfig {
  is_mqtt_enabled_poll_web?: boolean;
  is_service_down_web?: boolean;
  pw_skill_url?: string;
}

export type DefaultFirebaseConfig = Record<
  keyof IFirebaseConfig,
  string | number | boolean
>;

export const defaultConfig: DefaultFirebaseConfig = {
  is_mqtt_enabled_poll_web: false,
  is_service_down_web: false,
  pw_skill_url: '',
};
// Function to fetch and activate remote config

// Initialize Firebase

let remoteConfig: any;
export const fetchAndActivateConfig = async () => {
  try {
    // Fetch and activate remote config
    remoteConfig = getRemoteConfig(firebaseApp);
    remoteConfig.defaultConfig = defaultConfig;
    await fetchAndActivate(remoteConfig);
  } catch (err) {
    console.error('Error fetching and activating remote config: ', err);
  }
};

/**
 * TypeScript Magic ✨
 * */
function createDynamicGetters(obj: DefaultFirebaseConfig) {
  const result: Partial<DefaultFirebaseConfig> = {};
  // console.log(typeof defaultConfig.is_mqtt_enabled_poll_web);
  for (const key in obj) {
    // @ts-ignore
    if (typeof defaultConfig[key] === 'boolean') {

      // @ts-ignore
      result[key] = getBoolean(remoteConfig, key);

      // @ts-ignore
    } else if (typeof defaultConfig[key] === 'string') {

      // @ts-ignore
      result[key] = getString(remoteConfig, key);

      // @ts-ignore
    } else if (typeof defaultConfig[key] === 'number') {

      // @ts-ignore
      result[key] = getNumber(remoteConfig, key);
    } else {

      // @ts-ignore
      result[key] = getValue(remoteConfig, key)?.value;
    }
  }

  return result;
}

export const firebaseConfigDynamicGetters = () =>
  createDynamicGetters(defaultConfig);
export default firebaseApp;

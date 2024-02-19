import { EventType } from './events';

import { initializeApp } from 'firebase/app';
import {
  getAnalytics,
  logEvent as gaLogEvent,
  isSupported,
} from 'firebase/analytics';

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

let eventPrefix = 'pwk8_';

export const logEvent = (
  type: EventType,
  body: any,
  shouldPrefix = true,
  eventSource?: string
) => {
  let userId, userName, deviceId;
  if (typeof window !== 'undefined') {
    userId = JSON.parse(localStorage?.getItem('user') || '{}').id;
    userName = localStorage?.getItem('username');
    deviceId = localStorage?.getItem('randomId');
  }
  const data: {
    UserId?: string;
    UserPhoneNumber?: string;
    device_id?: string;
  } = {};
  if (eventSource) {
    eventPrefix = 'pw' + eventSource + '_';
  }
  if (userId) {
    data['UserId'] = userId;
  }
  if (userName) {
    data['UserPhoneNumber'] = userName;
  }
  /* if (deviceId) {
    data['device_id'] = deviceId
  } */

  const updatedData = { ...body, ...data };
  const app = initializeApp(firebaseConfig);
  isSupported().then((isBrowser) => (isBrowser ? invokeAnalytics() : null));

  const invokeAnalytics = () => {
    const analytics = getAnalytics(app);
    //   const user = window.localStorage.getItem('user')
    //   console.log(user)
    // TODO: Add Firebase event to log events

    body['timestamp'] = new Date();
    let eventName;
    if (shouldPrefix) {
      eventName = eventPrefix + type;
    } else {
      eventName = type;
    }
    //console.log(eventName, updatedData)
    gaLogEvent(analytics, eventName, updatedData);
  };
};

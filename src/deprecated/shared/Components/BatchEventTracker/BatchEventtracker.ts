import { logEvent } from '../Events/index';
import { EventType } from '../Events/events';
import helper from './helper';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();
const batchEventTracker = {
  batchCardExploreClick: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: '',
      batch_category: '',
      batch_price: '',
      exam: '',
      class: '',
      device_id: deviceId,
    };
    logEvent(EventType.PW_LIVE_EXPLORE_CLICK, body, false);
  },
  faqClick: (page_source: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      device_id: deviceId,
      page_source: page_source,
    };
    logEvent(EventType.FAQ_CLICK, body, false);
  },
  pwliveBuynowClick: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: '',
      batch_category: '',
      batch_price: '',
      exam: '',
      class: '',
      device_id: deviceId,
      page_source: '',
    };
    logEvent(EventType.PWLIVE_BUYNOW_CLICK, body, false);
  },
  PwOrientationVideoClick: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: '',
      batch_category: '',
      batch_price: '',
      exam: '',
      class: '',
    };
    logEvent(EventType.PWLIVE_ORIENTATION_VIDEO, body, false);
  },
  scheduleDownLoad: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: '',
      batch_category: '',
      batch_price: '',
      exam: '',
      class: '',
    };
    logEvent(EventType.DOWNLOAD_APP_CLICK, body, false);
  },
  freeContentVideo: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: '',
      batch_category: '',
      batch_price: '',
      exam: '',
      class: '',
    };
    logEvent(EventType.FREE_CONTENT_VIDE0, body, false);
  },

  authPageVisit: (cta_name: string, page_source: string) => {
    let cta_text;
    if (cta_name == 'Login/Register') {
      cta_text = 'login';
    } else if (cta_name == 'Get Started') {
      cta_text = 'get_started';
    }
    const body = {
      device_id: deviceId,
      cta_click: cta_text,
      page_referrer: page_source,
    };
    logEvent(EventType.AUTH_PAGE_VISIT, body, false);
  },
};

export default batchEventTracker;

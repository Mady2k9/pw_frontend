import { logEvent } from '../Events/index';
import { EventType } from '../Events/events';
import helper from '../helper';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();
const testSeriesEventTracker = {
  batchCardExploreClick: (batch_name: string, category: string | null | undefined, batch_price_amount: number | undefined, batch_price_updated_amount: number | undefined, batch_id: string, exam: string, classname: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: batch_name,
      batch_category: category,
      batch_price: { batch_price_updated_amount, batch_price_amount },
      batch_id: batch_id,
      exam: exam,
      class: classname,
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
  pwliveBuynowClick: (batch_name: string, category: string | null | undefined, batch_price_amount: number | undefined, batch_price_updated_amount: number | undefined, batch_id: string, exam: string, classname: string, page_source: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: batch_name,
      batch_category: category,
      batch_price: { batch_price_updated_amount, batch_price_amount },
      batch_id: batch_id,
      exam: exam,
      class: classname,
      device_id: deviceId,
      page_source: page_source,
    };
    logEvent(EventType.PWLIVE_BUYNOW_CLICK, body, false);
  },
  PwOrientationVideoClick: (batch_name: string, category: string, actual_amount: number, discounted_amount: number, batch_id: string, exam: string, className: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: batch_name,
      batch_category: category,
      batch_price: { actual_amount: actual_amount, discounted_amount: discounted_amount },
      batch_id: batch_id,
      exam: exam,
      class: className,
    };
    logEvent(EventType.PWLIVE_ORIENTATION_VIDEO, body, false);
  },
  scheduleDownLoad: (batch_name: string, category: string, actual_amount: number, discounted_amount: number, batch_id: string, exam: string, className: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: batch_name,
      batch_category: category,
      batch_price: { actual_amount: actual_amount, discounted_amount: discounted_amount },
      batch_id: batch_id,
      exam: exam,
      class: className,
    };
    logEvent(EventType.SCHEDULE_DOWNLOAD, body, false);
  },
  freeContentVideo: (batch_name: string, category: string, actual_amount: number, discounted_amount: number, batch_id: string, exam: string, className: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      batch_name: batch_name,
      batch_category: category,
      batch_price: { actual_amount: actual_amount, discounted_amount: discounted_amount },
      batch_id: batch_id,
      exam: exam,
      class: className,
    };
    logEvent(EventType.FREE_CONTENT_VIDE0, body, false);
  },
  callCtaClick: (page_source: string, call_number: number) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      device_id: deviceId,
      call_number: call_number,
      source: 'need_help',
      page_source: page_source,
    };
    logEvent(EventType.CALL_CTA_CLICK, body, false);
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

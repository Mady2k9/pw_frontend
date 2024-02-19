import { logEvent } from '../Events/index';
import { EventType } from '../Events/events';
import helper from './helper';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();
const eventTracker = {
  pwLandingPage: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      state: helper.isUserloggedIn() ? 'signed_in' : 'non_signed_in',
    };

    logEvent(EventType.PW_LANDING_PAGE, body, false);
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
  topNavigationClick: (cta_name: string, page_source: string) => {
    const body = {
      device_id: deviceId,
      cta_click: cta_name,
      page_source: page_source,
    };
    logEvent(EventType.TOP_NAVIGATION_CLICK, body, false);
  },

  authPageVisit: (cta_name: string, page_source: string) => {
    let cta_text;
    if (cta_name == 'Login/Register') {
      cta_text = 'login';
    } else if (cta_name == 'Get Started') {
      cta_text = 'get_started';
    } else if (cta_name == 'free_content') {
      cta_text = 'free_content';
    }
    const body = {
      device_id: deviceId,
      cta_click: cta_text,
      page_referrer: page_source,
    };
    logEvent(EventType.AUTH_PAGE_VISIT, body, false);
  },

  landingPageBannerClick: (banner_id: string, banner_link: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      device_id: deviceId,
      banner_id: banner_id,
      banner_link: banner_link,
    };
    logEvent(EventType.PW_LANDING_BANNER, body, false);
  },

  studyResourceClick: (card_click: string) => {
    //let card_name;
    //card_name = card_click.replaceAll(' ', '_').toLowerCase();
    const body = {
      device_id: deviceId,
      card_click: card_click.replaceAll(' ', '_').toLowerCase(),
    };
    logEvent(EventType.STUDY_RESOURCES_CLICK, body, false);
  },
  centrePageVisit: (page_source: string) => {
    const body = {
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      device_id: deviceId,
      source: page_source,
    };
    logEvent(EventType.CENTRE_LISTING_VISIT, body, false);
  },
  pwPageScroll: (scroll_depth: string, page_location: string) => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      device_id: deviceId,
      scroll_depth: scroll_depth,
      page_location: page_location,
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
      page_title: 'home_page',
    };
    logEvent(EventType.PW_PAGE_SCROLL, body, false);
  },
  batchListingVisit: (
    exam: string,
    sub_exam: string,
    class_name: string,
    came_from: string
  ) => {
    const body = {
      device_id: deviceId,
      exam: exam,
      sub_exam: sub_exam,
      class_name: class_name,
      came_from: came_from,
    };
    logEvent(EventType.BATCH_LISTING_VISIT, body, false);
  },
  appDownloadClick: (download_source: string, click_source: string) => {
    const body = {
      UserId: '',
      user_type: '',
      device_id: deviceId,
      download_source: download_source,
      page_source: '',
      click_source: click_source,
    };
    logEvent(EventType.DOWNLOAD_APP_CLICK, body, false);
  },
  footerClick: (main_category: string, category: string) => {
    const body = {
      UserId: '',
      user_type: '',
      device_id: deviceId,
      main_category: main_category,
      category: category,
    };
    logEvent(EventType.FOOTER_CLICK, body, false);
  },
};

export default eventTracker;

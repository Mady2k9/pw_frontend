import { logEvent } from '../Events/index';
import { EventType } from '../Events/events';
import helper from '../helper';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();
const PwRealTestEventTracker = {

  RealTestLandingPage: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      device_id: deviceId,
    };
    logEvent(EventType.REAL_TESTLANDING_PAGE, body, false);
  },
  RealTestRegistrationClick: () => {
    const body = {
      UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      device_id: deviceId,
    };
    logEvent(EventType.REAl_TEST_REGISTRATION_CLICK, body, false);
  }
};

export default PwRealTestEventTracker;

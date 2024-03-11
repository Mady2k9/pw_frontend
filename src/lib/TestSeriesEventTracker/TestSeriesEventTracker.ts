import { logEvent } from '../Events/index';
import { EventType } from '../Events/events';
import helper from '../helper';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();
const testSeriesEventTracker = {
    testListingVisit: ( cameFrom: string, exam: string, classname: string) => {
        const body = {
          device_id: deviceId,
          exam: exam,
          class: classname,
          cameFrom: cameFrom

        };
        logEvent(EventType.Test_Listing_Visit, body, false);
      },
      getPassClick: (  exam: string, amount: number,course: string, discount: number) => {
        const body = {
          device_id: deviceId,
          exam: exam,
          amount: amount,
          course: course,
          discount: discount,
        };
        logEvent(EventType.Get_Pass_Click, body, false);
      },
      testSeriesExploreClick: ( testseriesName: string, testseriesAmount: number | undefined,  exam: string,   className: string, discount: number| undefined) => {
        const body = {
            UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
          device_id: deviceId,
          testeries_name: testseriesName,
          testseries_amount: testseriesAmount,
          exam: exam,
          class: className,
          discount: discount,
        };
        logEvent(EventType.Test_Series_Explore_Click, body, false);
      },
      testSeriesBuyNowClick: ( testseriesName: string, testseriesAmount: number | undefined,  exam: string,   className: string, discount: number| undefined, page_source: string) => {
        const body = {
            UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
          device_id: deviceId,
          testeries_name: testseriesName,
          testseries_amount: testseriesAmount,
          exam: exam,
          class: className,
          discount: discount,
          page_source: page_source,
        };
        logEvent(EventType.Test_Series_Buy_Click, body, false);
      },
      testViewScheduleClick: ( testseriesName: string, testseriesAmount: number | undefined,  exam: string,   className: string) => {
        const body = {
            UserId: helper.isUserloggedIn()
        ? JSON.parse(localStorage?.getItem('user') || '{}').id
        : '',
      user_type: helper.isUserloggedIn() ? 'logged_in' : 'non_logged_in',
          device_id: deviceId,
          testeries_name: testseriesName,
          testseries_amount: testseriesAmount,
          exam: exam,
          class: className,
        };
        logEvent(EventType.Test_View_Schedule, body, false);
      },

};

export default testSeriesEventTracker;

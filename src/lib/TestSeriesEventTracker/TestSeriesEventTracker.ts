import { logEvent } from '../Events/index';
import { EventType } from '../Events/events';
import helper from '../helper';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();
const testSeriesEventTracker = {
};

export default testSeriesEventTracker;

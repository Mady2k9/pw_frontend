export type Payload = {
  phone: string;
  name: string;
  applicationNumber: string;
  dob: string;
  otp: string | number;
  // admitCard: string;
};

export type FormProps = {
  onSubmit: (val: Payload) => void;
  payload: Payload;
  setPayload: (val: any) => void;
  userData: any;
  setUserData: any;
};

export type PredictorVariant =
  | 'GATE'
  | 'NEET'
  | 'JEE_MAIN'
  | 'NEET_ANSWER_KEY'
  | 'ANJAAM_JEE_TEST_SERIES'
  | 'JEE_ADVANCED'
  | 'CAT';

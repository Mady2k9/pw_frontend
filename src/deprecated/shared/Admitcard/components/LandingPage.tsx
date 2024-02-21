import React, { useEffect, useState } from 'react';
import Form from './Form';
import HowItWorks from './HowItWorks';
import FAQSection from './FAQSection';
import ThankYouPage from './ThankYouPage';
import { getToken } from '../api/getToken';
import { submitDetails } from '../api/submitDetails';
import Banner from './Banner';
import FormLoading from './FormLoading';
import { fetchUserResponse } from '../api/fetchUserResponse';
import { Payload } from '../types';
import useNotify, { NotificationEnums } from './common/useNotify';
import { updateCohort } from '../api/updateCohort';
import { getProfileData } from '../api/getProfileData';
import { v4 as uuidv4 } from 'uuid';
import { updateUsers } from '../api/users';
import { updateRecentCohort } from '../api/updateRecentCohort';

const LandingPage = () => {
  const { showNotification } = useNotify();
  const [payload, setPayload] = useState<Payload>({
    phone: '',
    name: '',
    applicationNumber: '',
    dob: '',
    otp: '',
    // admitCard: '',
  });
  const [userData, setUserData] = useState<any>();
  const [formSubmited, setFormSubmitted] = useState<boolean>(false);
  const [formLoading, setFormLoading] = useState(false);
  const [otoken, setOToken] = useState('');
  const [tokenData, setTokenData] = useState<any>();
  const resubmitHandler = async () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('TOKEN');
    if (user && token) {
      const response = await fetchUserResponse(otoken);
      setFormLoading(true);
      if (response.success) {
        const date = response.data.dob.substring(0, 10);
        setPayload({
          name: String(response.data.name),
          dob: date,
          phone: String(response.data.phone),
          applicationNumber: String(response.data.applicationNumber),
          otp: '',
        });
        setFormSubmitted(false);
      } else {
        showNotification({
          type: NotificationEnums.ERROR,
          title: response.error.message || 'Please Try Again',
        });
      }
      setFormLoading(false);
    } else {
      setPayload({
        name: '',
        dob: '',
        phone: '',
        applicationNumber: '',
        otp: '',
      });
      setFormSubmitted(false);
    }
  };

  const redirectToBatch = () => {
    const url = `${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}study/batches/jee-preparation-bundle-819638/batch-overview?came_from=my-batches`;
    window.open(url, '_parent');
  };

  const startPrepCTA = async () => {
    const user: any = localStorage.getItem('user');
    const token = localStorage.getItem('TOKEN');
    if (!(user && token) || (user && !user?.profileId?.cohortId)) {
      const data = {
        exam: 'IIT-JEE',
        class: '12',
      };
      const response = await updateCohort(data, token || otoken);
      if (response.success) {
        const usersApiData = await updateUsers(
          {
            exams: ['IIT-JEE'],
            class: '12',
          },
          token || otoken
        );
        const profileData = await getProfileData(token || otoken);
        if (profileData.success) {
          localStorage.setItem('user', JSON.stringify({ ...profileData.data }));
          if (!(user && token)) {
            localStorage.setItem('TOKEN', tokenData.access_token);
            localStorage.setItem('REFRESH_TOKEN', tokenData.refresh_token);
            localStorage.setItem('TOKEN_VERIFIED', 'true');
            localStorage.setItem('expires_in', tokenData.expires_in);
          }
          localStorage.setItem(
            'COHORT_ID',
            profileData.data.profileId.cohortId
          );
          if (profileData.data.profileId.cohortId) {
            const recentCohort = await updateRecentCohort(
              {
                cohortId: profileData.data.profileId.cohortId || '',
              },
              token || otoken
            );
          }
        }
      }
    }
    redirectToBatch();
  };

  const formSubmitHandler = async (payload: Payload) => {
    setFormLoading(true);
    const newPayload = {
      name: payload.name,
      dob: payload.dob,
      phone: payload.phone,
      applicationNumber: payload.applicationNumber,
    };
    if (localStorage.getItem('TOKEN') || otoken) {
      const token: string = localStorage.getItem('TOKEN') || otoken;
      const formSubmitResponse = await submitDetails(newPayload, token);
      if (formSubmitResponse.success) {
        setFormLoading(false);
        setFormSubmitted(true);
      } else {
        showNotification({
          type: NotificationEnums.ERROR,
          title:
            formSubmitResponse.error.message ||
            'Form Submission Failed, Please Try Again',
        });
        setFormLoading(false);
      }
    } else {
      const otp = payload.otp;
      const response = await getToken(otp, payload.phone);
      if (response.success) {
        const token = response.data.access_token;
        setTokenData(response.data);
        setOToken(token);
        const formSubmitResponse = await submitDetails(newPayload, token);
        if (formSubmitResponse.success) {
          setFormLoading(false);
          setFormSubmitted(true);
        } else {
          setFormLoading(false);
        }
      }
    }
  };

  const reFetchResponse = async (token: string) => {
    const response = await fetchUserResponse(token);
    if (response.success) {
      setFormSubmitted(true);
      const date = response.data.dob.substring(0, 10);
      setPayload({
        name: response.data.name,
        dob: date,
        phone: response.data.phone,
        applicationNumber: response.data.applicationNumber,
        otp: '',
      });
    }
  };
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUserData(userData);
      const user: any = JSON.parse(localStorage.getItem('user') || '') || '';
      let name: string = user?.firstName;
      if (name) {
        const lastName = user?.lastName;
        if (lastName) name = name.concat(' ', lastName);
        setPayload((prev: Payload) => {
          return { ...prev, name: name };
        });
      }
    }
    const token = localStorage.getItem('TOKEN');
    if (token) {
      setOToken(token);
      reFetchResponse(token);
    }
    if (!localStorage.getItem('randomId') && !localStorage.getItem('uuid')) {
      const newId = uuidv4();
      localStorage.setItem('randomId', newId);
      localStorage.setItem('uuid', newId);
    }
  }, []);
  return (
    <div className="h-full">
      <div>
        <Banner></Banner>
      </div>
      <div className="w-full flex xl:mt-[-160px] mt-[-100px] z-50 justify-center lg:px-32 px-4">
        {formSubmited ? (
          <ThankYouPage
            resubmitHandler={resubmitHandler}
            startPrepCTA={startPrepCTA}
          ></ThankYouPage>
        ) : !formLoading ? (
          <Form
            onSubmit={(e: Payload) => formSubmitHandler(e)}
            payload={payload}
            setPayload={setPayload}
            userData={userData}
            setUserData={setUserData}
          ></Form>
        ) : (
          <FormLoading></FormLoading>
        )}
      </div>
      <div className="m-4 mt-12" id="howitworks">
        <HowItWorks></HowItWorks>
      </div>
      <div>
        <FAQSection variant="JEE_MAIN"></FAQSection>
      </div>
    </div>
  );
};

export default LandingPage;

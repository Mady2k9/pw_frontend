import TextInput, { InputSize } from '@/deprecated/shared/UI/Inputs/TextInput';
import React, { useEffect, useState } from 'react';
import useNotify, { NotificationEnums } from './common/useNotify';
import SuccessfullySend from '../../../assets/Images/admitcard/SuccessfullySend.svg';
import Image from 'next/image';
import { getOtp } from '../api/getOtp';
import { studentRegistration } from '../api/studentRegistrationNew';
import { verifyOtp } from '../api/verifyOtp';
import CountDown from './CountDown';
import { FORM_FIELDS } from '../enums';
import { FormProps, Payload } from '../types';
import ShowError from './common/ShowError';
import { Button } from '@/components/ui/button';

const getErrorMessage = (field: FORM_FIELDS) => {
  switch (field) {
    case FORM_FIELDS.NAME:
      return 'Please enter a valid name';
    case FORM_FIELDS.PHONE:
      return `Please enter a valid phone number`;
    case FORM_FIELDS.DOB:
      return `Please enter valid DOB (should be before 2010)`;
    case FORM_FIELDS.OTP:
      return 'Please enter valid otp';
    case FORM_FIELDS.APPLICATION_NUMBER:
      return 'Please enter valid Application Number';
    default:
      return 'Something Went Wrong, Please Try Again';
  }
};

const Form: React.FC<FormProps> = (
  { onSubmit, payload, setPayload, setUserData },
  ref
) => {
  const [error, setError] = useState<Payload>({
    phone: '',
    name: '',
    applicationNumber: '',
    dob: '',
    otp: '',
    // admitCard: '',
  });
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [sameAsPWNum, setSameAsPWNum] = useState(false);
  const [otpsent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [seconds, setSeconds] = useState(-1);
  const { showNotification } = useNotify();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
      setOtpSent(false);
      setOtpVerified(false);
    }
  }, []);

  const isFormFieldsValid = (field: FORM_FIELDS, value: string) => {
    switch (field) {
      case FORM_FIELDS.NAME:
        return (
          new RegExp(/^([a-zA-Z]+\s)*[a-zA-Z]+$/).test(value) &&
          value.length > 0 &&
          value.length < 61
        );
      case FORM_FIELDS.PHONE:
        return (
          value.length === 10 && new RegExp(/^[6-9]{1}[0-9]{9}$/).test(value)
        );
      case FORM_FIELDS.DOB:
        return (
          new RegExp(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/).test(
            value
          ) && Number(value.substring(0, 4)) <= 2010
        );
      case FORM_FIELDS.OTP:
        return (
          (value.length === 6 && new RegExp(/^[0-9]/).test(value)) ||
          userLoggedIn ||
          otpVerified
        );
      case FORM_FIELDS.APPLICATION_NUMBER:
        return (
          value.length === 12 && new RegExp(/^[1-9]{1}[0-9]{11}/).test(value)
        );
      // case FORM_FIELDS.ADMIT_CARD:
      //   return value.length > 0;
      default:
        return true;
    }
  };

  const handleChange = (field: FORM_FIELDS, value: string) => {
    const isValidValue = isFormFieldsValid(field, value);
    setPayload({
      ...payload,
      [field]: value,
    });
    if (isValidValue) {
      setError({
        ...error,
        [field]: '',
      });
    } else {
      setError({
        ...error,
        [field]: getErrorMessage(field),
      });
      if (field === 'phone') {
        setOtpSent(false);
        setOtpVerified(false);
        setSeconds(-1);
      }
    }
  };

  const handleSubmit = () => {
    for (const [key, value] of Object.entries(payload)) {
      if (!isFormFieldsValid(key as FORM_FIELDS, value as string)) {
        setError({
          ...error,
          [key]: getErrorMessage(key as FORM_FIELDS),
        });
        showNotification({
          type: NotificationEnums.ERROR,
          title: getErrorMessage(key as FORM_FIELDS),
        });
        return;
      }
    }
    setOtpSent(false);
    setSeconds(-1);
    const date = new Date(payload.dob);
    onSubmit({
      name: payload.name,
      dob: date.toISOString(),
      phone: payload.phone,
      otp: +payload.otp,
      applicationNumber: payload.applicationNumber,
      // admitCard: payload.admitCard,
    });
  };

  // const handleIconChange = (value: string) => {
  //   setPayload((prev: Payload) => {
  //     return {
  //       ...prev,
  //       admitCard: value,
  //     };
  //   });
  // };

  const handleCheckboxChange = (value: boolean) => {
    if (value) {
      setUserData(true);
      const user: any = JSON.parse(localStorage.getItem('user') || '');
      const phoneNum: string = user?.primaryNumber;
      if (phoneNum.length > 0) {
        handleChange(FORM_FIELDS.PHONE, phoneNum);
      } else handleChange(FORM_FIELDS.PHONE, '');
      setOtpSent(true);
      setOtpVerified(true);
      setPayload((prev: Payload) => {
        return { ...prev, otp: '' };
      });
    } else {
      setUserData(false);
      setSeconds(-1);
      setOtpSent(false);
      setOtpVerified(false);
    }
    setSameAsPWNum((prev: boolean) => {
      return !prev;
    });
  };

  const getOtpHandler = async () => {
    let apidata: { mobile: string; countryCode: string; firstName?: string } = {
      mobile: payload.phone,
      countryCode: '+91',
    };
    if (payload.name) apidata = { ...apidata, firstName: payload.name };
    try {
      const response = await studentRegistration(apidata);
      if (response?.success) {
        setOtpSent(true);
        setUserData(response.data);
        showNotification({
          type: NotificationEnums.SUCCESS,
          title: 'OTP Sent',
        });
        setSeconds(10);
      } else if (response.error.message === 'User Already Exist') {
        const apiresponse = await getOtp({
          username: apidata.mobile,
          countryCode: apidata.countryCode,
          organizationId: process.env.NEXT_PUBLIC_PP_ORG_ID,
        });
        if (apiresponse.success) {
          setOtpSent(true);
          setSeconds(10);
          showNotification({
            type: NotificationEnums.SUCCESS,
            title: 'OTP Sent',
          });
        } else {
          if (response.error.message === 'Not a Valid Username')
            showNotification({
              type: NotificationEnums.ERROR,
              title:
                'Please change the name and re-submit again' ||
                response.error.message ||
                'OTP Sent Failed | Please Try Again',
            });
          setSeconds(-1);
        }
      } else {
        setSeconds(-1);
        if (response.error.message === 'Not a Valid Username')
          showNotification({
            type: NotificationEnums.ERROR,
            title:
              'Please change the name and re-submit again' ||
              response.error.message ||
              'OTP Sent Failed | Please Try Again',
          });
        else {
          showNotification({
            type: NotificationEnums.ERROR,
            title: 'OTP Sent Failed | Please Try Again',
          });
        }
      }
    } catch (error) {
      showNotification({
        type: NotificationEnums.ERROR,
        title: 'OTP Sent Failed | Please Try Again',
      });
    }
  };
  const verifyOtpHandler = async () => {
    const apiData = {
      mobile: payload.phone,
      organizationId: process.env.NEXT_PUBLIC_PP_ORG_ID,
      otp: payload.otp,
    };
    try {
      const response = await verifyOtp(apiData);
      if (response.success) {
        setOtpVerified(true);
        showNotification({
          type: NotificationEnums.SUCCESS,
          title: 'OTP Verified',
        });
      } else {
        showNotification({
          type: NotificationEnums.ERROR,
          title: 'OTP Verification Failed | Please Try Again',
        });
      }
    } catch {
      showNotification({
        type: NotificationEnums.ERROR,
        title: 'OTP Verification Failed | Please Try Again',
      });
    }
  };
  return (
    <div className="w-full lg:max-w-6xl bg-white z-10 rounded-md md:p-10 shadow-md p-2">
      <div className="w-full p-2 flex justify-between">
        <div className="flex flex-col justify-center align-middle">
          <p className="w-full text-xl font-semibold">Enter your details</p>
        </div>
        <Button
          onClick={() => {
            const ele = document?.getElementById('howitworks');
            if (ele) {
              ele?.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}
        >
          <div className="border border-black rounded-full h-5 w-5 font-semibold text-[#3D3D3D]">
            ?
          </div>
          <p className="font-semibold text-[#3D3D3D]">How it Works</p>
        </Button>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        {!userLoggedIn && (
          <div className="w-full p-2 md:w-1/2">
            <TextInput
              label="Name*"
              size={InputSize.Large}
              value={payload.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(FORM_FIELDS.NAME, e.target.value)
              }
            ></TextInput>
            {error?.name.length > 0 && (
              <ShowError error={error} field={FORM_FIELDS.NAME} />
            )}
          </div>
        )}
        <div className="w-full p-2 md:w-1/2">
          <TextInput
            label="12 Digit Application Number*"
            size={InputSize.Large}
            value={payload.applicationNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(FORM_FIELDS.APPLICATION_NUMBER, e.target.value)
            }
            maxLength={12}
          ></TextInput>
          {error?.applicationNumber.length > 0 && (
            <ShowError error={error} field={FORM_FIELDS.APPLICATION_NUMBER} />
          )}
        </div>
        {userLoggedIn && (
          <div className="w-full md:w-1/2 md:px-2 md:py-0 p-2">
            <p className="block text-sm font-medium leading-4 text-gray-600 my-2">
              DOB*
            </p>
            <input
              type="date"
              max={new Date('2009-12-31').toISOString().split('T')[0]}
              className="w-full cursor-pointer border border-slate-300 rounded-md p-1.5"
              value={payload.dob}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value) {
                  handleChange(FORM_FIELDS.DOB, e.target.value);
                }
              }}
              name="dob"
            />
            {error?.dob.length > 0 && (
              <ShowError error={error} field={FORM_FIELDS.DOB} />
            )}
          </div>
        )}
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full p-2">
          <div className="w-full flex flex-col justify-between">
            <div className="w-full flex">
              <div className="w-full">
                <TextInput
                  label="JEE Registered Mobile Number*"
                  value={payload.phone}
                  size={InputSize.Large}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(FORM_FIELDS.PHONE, e.target.value)
                  }
                  disabled={sameAsPWNum}
                  maxLength={10}
                ></TextInput>
              </div>
              {otpVerified && (
                <div className="flex flex-col justify-end my-2">
                  <Image
                    src={SuccessfullySend}
                    width={30}
                    height={30}
                    alt="Succes"
                  ></Image>
                </div>
              )}
            </div>
            {isFormFieldsValid(FORM_FIELDS.PHONE, payload.phone) &&
              !otpVerified &&
              (seconds === -1 || seconds === 0) &&
              !sameAsPWNum && (
                <div className="w-full flex justify-end mt-2 ">
                  <button
                    className=" text-[#5A4BDA] text-[14px] font-medium"
                    onClick={getOtpHandler}
                  >
                    {seconds === -1 ? 'Get Otp' : 'Resend Otp'}
                  </button>
                </div>
              )}
            {!otpVerified && seconds > 0 && (
              <div className="w-full flex justify-end mt-2 text-[#5A4BDA] font-medium text-[14px]">
                {' '}
                <CountDown
                  seconds={seconds}
                  setSeconds={setSeconds}
                ></CountDown>
              </div>
            )}
          </div>
          {error?.phone.length > 0 && (
            <ShowError error={error} field={FORM_FIELDS.PHONE} />
          )}
        </div>
        <div className="w-full p-2">
          {isFormFieldsValid(FORM_FIELDS.PHONE, payload.phone) && otpsent ? (
            <div className="w-full flex flex-col justify-between">
              <div className="w-full flex">
                <div className="w-full">
                  <TextInput
                    label="OTP*"
                    size={InputSize.Large}
                    value={payload.otp}
                    maxLength={6}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(FORM_FIELDS.OTP, e.target.value)
                    }
                    disabled={otpVerified}
                  ></TextInput>
                </div>
              </div>
              {!otpVerified && (
                <div className="w-full flex justify-end mt-2">
                  <button
                    className="m-1 text-[#5A4BDA] font-medium text-[14px]"
                    onClick={verifyOtpHandler}
                  >
                    Verify Otp
                  </button>
                </div>
              )}
            </div>
          ) : (
            <TextInput label="OTP*" size={InputSize.Large} disabled></TextInput>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        {!userLoggedIn && (
          <div className="w-full md:w-1/2 p-2">
            <p className="block text-sm font-medium leading-4 text-gray-600 my-2">
              DOB*
            </p>
            <input
              type="date"
              max={new Date('2009-12-31').toISOString().split('T')[0]}
              className="!w-full cursor-pointer border border-slate-300 rounded-md p-1.5 !bg-white h-[48px] md:h-auto"
              value={payload.dob}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value) {
                  handleChange(FORM_FIELDS.DOB, e.target.value);
                }
              }}
              name="dob"
            />
            {error?.dob.length > 0 && (
              <ShowError error={error} field={FORM_FIELDS.DOB} />
            )}
          </div>
        )}
        {/* <div className="w-full md:w-1/2 p-2">
          <div className="block text-sm font-medium leading-4 text-gray-600 my-2">
            <p>Upload Admit Card*</p>
          </div>
          <UploadImage
            setUploadedImgUrl={handleIconChange}
            uploadedImgUrl={payload.admitCard || ''}
          ></UploadImage>
          <div className="m-1 mt-2 flex">
            <div className="w-4">
              <Info></Info>
            </div>
            <p className="text-[#3D3D3D] text-xs mx-1">
              Max. File Size - 3MB, Supported format .pdf
            </p>
          </div>
        </div> */}
      </div>
      {userLoggedIn && (
        <div className="w-full p-2">
          <span>
            <input
              type="checkbox"
              checked={sameAsPWNum}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckboxChange(e.target.checked)
              }
            ></input>
            <label className="m-2">Same as PW Mobile Number</label>
          </span>
        </div>
      )}
      <div className="flex justify-end">
        <button
          className={`bg-black text-white p-2 m-2 rounded-md md:w-40 h-[48px] w-full ${
            !otpVerified ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handleSubmit}
          disabled={!otpVerified}
        >
          Submit
        </button>
      </div>
      {/* <div>
        {error?.admitCard.length > 0 && (
          <ShowError error={error} field={FORM_FIELDS.ADMIT_CARD} />
        )}
      </div> */}
    </div>
  );
};

export default Form;

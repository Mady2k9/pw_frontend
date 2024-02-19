export const getOtp = async (formData: any): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v1/users/get-otp?smsType=0`;

  // const url = `https://stage-api.penpencil.co/v1/users/get-otp?smsType=0`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, /',
      client_type: 'WEB',
    },
  });

  return response.json();
};

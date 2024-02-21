export const studentRegistration = async (apiData: any): Promise<any> => {
  const ORGID = process.env.NEXT_PUBLIC_PP_ORG_ID;
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v1/users/register/${ORGID}`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(apiData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

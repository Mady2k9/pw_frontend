export const getToken = async (
  otp: string | number,
  username: string
): Promise<any> => {
  const data: any = {
    otp: otp,
    client_id: 'system-admin',
    client_secret: 'KjPXuAVfC5xbmgreETNMaL7z',
    grant_type: 'password',
    ttl: 1000 * 60 * 60 * 24 * 7,
    latitude: 0,
    longitude: 0,
    // organizationId: '5eb393ee95fab7468a79d189',
    organizationId: process.env.NEXT_PUBLIC_PP_ORG_ID,
    username: username,
  };
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v3/oauth/token`;
  // const url = `https://stage-api.penpencil.co/v3/oauth/token`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, /',
      client_type: 'WEB',
      randomId: localStorage.getItem('uuid') || '',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

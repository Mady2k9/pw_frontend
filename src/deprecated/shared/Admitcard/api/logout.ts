export const logOutUser = async (): Promise<any> => {
  const token = localStorage.getItem('TOKEN');
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v1/oauth/logout`;
  // const url = 'https://stage-api.penpencil.co/v1/oauth/logout';
  const response = await fetch(url, {
    method: 'POST',
    body: null,
    headers: {
      'Content-Type': 'application/json  text/plain, /',
      Accept: 'application/json, text/plain, /',
      client_type: 'WEB',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

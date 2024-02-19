export const BASE_URL = process.env.NEXT_PUBLIC_PP_API_BASE_URL;
export const verifyToken = async () => {
  const token = localStorage?.getItem('TOKEN') || '';
  const Token = `Bearer ${token}`;
  const randomId = localStorage?.getItem('uuid') || '';
  const myHeaders = new Headers();
  myHeaders.append('client-version', '2.4.16');
  myHeaders.append('Authorization', Token);
  myHeaders.append('Accept', 'application/json, text/plain, */*');
  myHeaders.append('randomId', randomId);
  myHeaders.append('client-id', '5eb393ee95fab7468a79d189');
  myHeaders.append('client-type', 'WEB');
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };
  if (token && randomId) {
    return fetch(`${BASE_URL}v3/oauth/verify-token`, requestOptions)
      .then((response) => {
        return response.status;
      })
      .catch((err) => console.log(err));
  }
  return null;
};

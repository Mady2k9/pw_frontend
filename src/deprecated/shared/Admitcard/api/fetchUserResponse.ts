export const fetchUserResponse = async (otoken: string): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v1/student-acquisition/results-form/jee-main`;
  // const url = `https://stage-api.penpencil.co/v1/student-acquisition/results-form/jee-main`;
  const token = otoken || localStorage.getItem('TOKEN');
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

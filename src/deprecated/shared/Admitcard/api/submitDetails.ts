export const submitDetails = async (
  formData: any,
  token: string
): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v1/student-acquisition/results-form/jee-main`;
  // const url = `https://stage-api.penpencil.co/v1/student-acquisition/results-form/jee-main`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

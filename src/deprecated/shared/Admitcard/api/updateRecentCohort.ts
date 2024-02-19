export const updateRecentCohort = async (
  formData: any,
  token: string | null
): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v1/users/update-recent-cohort`;
  // const url = ` https://stage-api.penpencil.co/v1/users/update-recent-cohort`;
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

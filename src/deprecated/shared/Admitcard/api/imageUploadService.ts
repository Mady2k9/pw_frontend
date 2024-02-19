export const uploadImage = async (formData: FormData): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}/v1/files`;
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  return response.json();
};

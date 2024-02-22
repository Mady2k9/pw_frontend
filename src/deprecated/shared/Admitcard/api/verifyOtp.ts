export const verifyOtp = async (formData: any): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_PP_API_BASE_URL}v1/users/verify-otp`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

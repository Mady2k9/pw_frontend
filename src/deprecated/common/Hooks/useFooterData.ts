import { useQuery } from 'react-query';

interface ReturnType {
  footerData: { data: any };
  isLoading: boolean;
  error: unknown;
}

const fetchFooterData = async (footerData: string) => {
  return fetch(`https://dev-api.penpencil.co/widget/${footerData}`).then(
    (res) => res.json()
  );
};
const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID;
const useFooterData = (): ReturnType => {
  const footerDataName = `footer?orgId=${orgId}&appId=${appId}`;
  const {
    isLoading,
    error,
    data: footerData,
  } = useQuery(
    `fetch-${footerDataName}`,
    () => fetchFooterData(footerDataName),
    {
      staleTime: 5000,
    }
  );
  return {
    error,
    isLoading,
    footerData,
  };
};

export default useFooterData;

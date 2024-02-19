import { useQuery } from 'react-query';

interface ReturnType {
  headerData: { data: any };
  isLoading: boolean;
  error: unknown;
}

const fetchHeaderData = async (headerData: string) => {
  return fetch(`https://dev-api.penpencil.co/widget/${headerData}`).then(
    (res) => res.json()
  );
};
const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID;
const useHomePageData = (): ReturnType => {
  const headerDataName = `page-snapshot?orgId=${orgId}&appId=${appId}&pageType=HOMEPAGE&slug=pw.live`;
  const {
    isLoading,
    error,
    data: headerData,
  } = useQuery(
    `fetch-${headerDataName}`,
    () => fetchHeaderData(headerDataName),
    {
      staleTime: 5000,
    }
  );

  return {
    error,
    isLoading,
    headerData,
  };
};

export default useHomePageData;

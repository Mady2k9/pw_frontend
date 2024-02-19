import { useQuery } from 'react-query';
import { HeaderItemsData } from '../../shared/Components/Molecules/Header/HeaderType.d';

interface ReturnType {
  headerData: { data: HeaderItemsData[] };
  isLoading: boolean;
  error: unknown;
}
const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID;
const fetchHeaderData = async (headerData: string) => {
  return fetch(`https://dev-api.penpencil.co/widget/${headerData}`).then(
    (res) => res.json()
  );
};

const useHeaderData = (): ReturnType => {
  const headerDataName = `header?orgId=${orgId}&appId=${appId}`;
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

export default useHeaderData;

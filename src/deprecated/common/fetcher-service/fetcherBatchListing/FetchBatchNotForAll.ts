export const fetchBatchNotForAll = async (slug: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BE_DATA_URL}/gcms/batch-page-snapshot?orgId=${process.env.NEXT_PUBLIC_ORG_ID}&appId=${process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID}&pageType=BATCH_LISTING&slug=${slug}`
  ).then((res) => res.json());
};

export function jsonToQueryString(json: any) {
  if (!json) {
    return '';
  }
  return (
    '?' +
    Object.keys(json)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
}
export function queryStringToJson(queryString: string) {
  if (!queryString) {
    return {};
  }
  const d = JSON.parse(
    '{"' +
      decodeURI(queryString)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  for (const i in d) {
    d[i] = decodeURIComponent(d[i]);
  }
  return d;
}
export const fetchFilteredBatchNotForAll = async (
  filters: any,
  cohortId: string
) => {
  const _filter: any = {};
  for (const i in filters) {
    if (filters[i]) {
      _filter[i] = filters[i];
    }
  }
  _filter['cohortIds'] = cohortId;
  return await fetch(
    `${process.env.NEXT_PUBLIC_BE_DATA_URL}/gcms/batch/list${jsonToQueryString(
      _filter
    )}`
  ).then((res) => res.json());
};

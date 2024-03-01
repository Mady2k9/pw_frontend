import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Currency = 'USD' | 'INR';

export function formatCurrency(amount: number, currency: Currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(isNaN(amount) ? 0 : Math.floor(amount));
}

export function formatNumber(amount: number){
  return new Intl.NumberFormat('en-US').format(isNaN(amount) ? 0 : Math.floor(amount));
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
    '"}',
  );
  for (const i in d) {
    d[i] = decodeURIComponent(d[i]) === 'true' ? true : decodeURIComponent(d[i]);
  }
  return d;
}

export function jsonToQueryString(json: any) {
  if (!json) {
    return '';
  }
  return (
    '?' +
    Object.keys(json)
      .map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
}

export function getTestAction(startTime: string, purchased?: boolean): 'start' | 'resume' | 'locked' | 'upcoming' | 'expired' | 're-attempt' | 'show-result' {
  if (purchased == false) {
    return 'locked';
  }
  const currentDate = new Date();
  const startDate = new Date(startTime);
  if (currentDate < startDate) {
    return 'upcoming';
  }
  if (currentDate > startDate) {
    return 'start';
  }
  return 'start';
}

export function stringToSlug(str: string) {
  return str.replace(/ /g, '-').toLowerCase();
}

export function slugToString(str: string) {
  return str.replace(/-/g, ' ');
}

export function imageToImageUrl(image: any) {
  if (typeof image !== 'object' || !image) {
    return image;
  }
  return `${image.baseUrl}${image.key}`;
}

export function uniqueBy<T>(arr: T[], key: keyof T) {
  return arr.filter((v, i, a) => a.findIndex(t => (t as any)[key] === (v as any)[key]) === i);
}

export function getFullName(user: any) {
  if (!user) {
    return '';
  }
  const { firstName, lastName } = user;
  return `${firstName} ${lastName || ''}`.trim();
}

export function checkIfLectureIsLive(lecture: any) {
  const { startTime, endTime } = lecture;
  const currentDate = new Date();
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  return currentDate >= startDate && currentDate <= endDate;
}

export function checkIfLectureIsUpcoming(lecture: any) {
  const { startTime } = lecture;
  const currentDate = new Date();
  const startDate = new Date(startTime);

  return currentDate < startDate;
}

export function checkIfLectureIsPast(lecture: any) {
  const { endTime } = lecture;
  const currentDate = new Date();
  const endDate = new Date(endTime);

  return currentDate > endDate;
}

export function stringToBase64(str: string): string {
  return btoa(str);
}

// Decode a Base64 string to its original string
export function base64ToString(b64: string): string {
  return atob(b64);
}

export function padRightArray<T>(arr: T[], length: number, value: T) {
  return arr.concat(Array(length - arr.length).fill(value));
}

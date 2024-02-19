export function getFullName(user: any) {
  if (!user) {
    return '';
  }
  const { firstName, lastName } = user;
  return `${firstName} ${lastName || ''}`.trim();
}

export function formatDateAndTime(date: string) {
  const inputDate = new Date(date);
  const today = new Date();

  // Check if the input date is today
  if (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  ) {
    // If it is today, format only the time
    return inputDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  } else {
    // If it is not today, format the date and time
    return inputDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }
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

export function isInViewport(element: any) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
export function scrollToElement(element: any) {
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 200, // Adjusted with an offset of 200px
      behavior: 'smooth',
    });
  }
}

export function isAnyPartInViewportWithOffset(
  element: HTMLElement,
  offset = 0
) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView =
    rect.top - offset <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

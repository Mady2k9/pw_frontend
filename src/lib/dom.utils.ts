export function scrollToElement(element?: HTMLElement, offset = false) {
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 120,
      behavior: 'smooth',
    });
  }
}

export function scrollWrapperLeftToElement(wrapper: HTMLElement, element: HTMLElement | null, offset = false) {
  if (wrapper) {
    wrapper.scrollTo({
      left: element ? (element.offsetLeft + -20) : 0,
      behavior: 'smooth',
    });
  }
}

export function pageRedirect() {
  return {};
}

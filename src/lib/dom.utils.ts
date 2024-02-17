export function scrollToElement(element?: HTMLElement, offset = false, ) {
    if (element) {
        window.scrollTo({
            top: element.offsetTop + (offset ? -window.innerHeight + element.offsetHeight : 0),
            behavior: "smooth",
        })
    }
}

export function pageRedirect() {
    return {}
}

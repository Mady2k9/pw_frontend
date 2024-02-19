function GoogleTagManager() {
  return {
    __html: ` <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TLKGKK9"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>`,
  };
}
export default GoogleTagManager;

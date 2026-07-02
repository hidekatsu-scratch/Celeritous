(() => {
  const head = document.head;
  const firstChild = head.firstChild;
  const gaScript = document.createElement('script');
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-L7VLTDKNMM';
  gaScript.async = true;
  head.insertBefore(gaScript, firstChild);
  const inlineScript = document.createElement('script');
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-L7VLTDKNMM');
  `;
  head.insertBefore(inlineScript, firstChild);
})();

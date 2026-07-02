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
  const clarityScript = document.createElement('script');
  clarityScript.textContent = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xg1nujf6h6");
  `;
  head.insertBefore(clarityScript, firstChild);
})();

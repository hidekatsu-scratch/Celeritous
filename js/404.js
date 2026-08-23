(()=>{
  const getLanguageFromCookie=()=>{
  const cookieValue=document.cookie.match(/(^|;) ?language=([^;]*)(;|$)/);
  return cookieValue?cookieValue[2]:"ja";};
  const lang=getLanguageFromCookie();
  const contentMap={
ja:{title: "Celeritous - 404エラー　ページが見つかりません",
html: `<h1>404</h1><p>ページが見つかりません</p><p>URLを確認してください。</p>`},
en:{title: "Celeritous - 404 error Page not found",
html: `<h1>404</h1><p>Page not found</p><p>Please check the URL.</p>`}}
  const currentContent=contentMap[lang]||contentMap["ja"];
  document.title=currentContent.title;
  const mainDiv=document.querySelector(".main");
  if(mainDiv){mainDiv.innerHTML=currentContent.html;}
  const scriptTag=document.createElement("script");
  scriptTag.src="/js/main.js";
  scriptTag.defer=true;
  document.head.appendChild(scriptTag);
})();

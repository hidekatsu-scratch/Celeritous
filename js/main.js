(() => {
  const getLanguageFromCookie = () => {
    const cookieValue = document.cookie.match(/(^|;) ?language=([^;]*)(;|$)/);
    return cookieValue ? cookieValue[2] : "ja";
  };
  const lang = getLanguageFromCookie();
  const contentMap = {
    ja: {
      header: `
        <ul><li><div class="header-logo"><a href="/"><img src="/img/all_logo.svg"></a></div></li>
          <li><a href="/editor?new=true">作る</a></li>
          <li><a href="/project">見る</a></li>
          <li><div class="search">
            <button><img src="/img/search.svg"></button>
            <input type="text" id="serach_text_area" placeholder="検索">
          </div></li>
          <li><a href="/join">新規登録</a></li>
          <li><a href="/login">ログイン</a></li></ul>
      `,
      footer: `
        <div class="footer_warn"><p>このサイトはScratch、TurboWarp、PenguinMod、Scartch Teamなどと提携や協力はしていません。ご注意ください。<p></div>
        <div class="footer_link">
          <dl><dt><span>このサイトについて</span></dt>
            <dd><a href="https://suport.celeritous.xct.f5.si"><span>サポート</span></a></dd>
            <dd><a href="https://wiki.celeritous.xct.f5.si"><span>wiki</span></a></dd>
            <dd><a href="/contact"><span>お問い合わせ</span></a></dd>
            <dd><a href="/discussion"><span>ディスカッション</span></a></dd>
          </dl><dl><dt><span>規約</span></dt>
            <dd><a href="/rule"><span>利用規約</span></a></dd>
            <dd><a href="/commumunity_guidelines"><span>コミュニティーガイドライン</span></a></dd>
            <dd><a href="/guideline"><span>ガイドライン</span></a></dd>
          </dl>
        </div>
        <div class="language_select"><select name="language_select_area" id="language_select_area"></select></div>
      `
    },
    en: {
      header: `
        <div class="header-logo"><a href="/">celeritous</a></div>
        <nav class="header-nav">
          <a href="/features">Features</a>
          <a href="/docs">Docs</a>
          <a href="/community">Community</a>
        </nav>
      `,
      footer: `
        <p>&copy; 2026 celeritous. All rights reserved.</p>
        <div class="footer-links"><a href="/privacy">Privacy Policy</a></div>
      `
    }
  };
  const scriptsToLoad = [
    { src: "/js/footer.js", defer: true },
    { src: "/js/maincss.js", defer: true},
  ];
  const currentContent = contentMap[lang] || contentMap["ja"];
  const headerElem = document.querySelector("header");
  if (headerElem) {
    headerElem.innerHTML = currentContent.header;
  }
  const footerElem = document.querySelector("footer");
  if (footerElem) {
    footerElem.innerHTML = currentContent.footer;
  }
  scriptsToLoad.forEach(scriptConfig => {
    const scriptTag = document.createElement("script");
    scriptTag.src = scriptConfig.src;
    if (scriptConfig.defer) scriptTag.defer = true;
    if (scriptConfig.async) scriptTag.async = true;
    document.head.appendChild(scriptTag);
  });
})();

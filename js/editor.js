(() => {
  const getLanguageFromCookie = () => {
    const cookieValue = document.cookie.match(/(^|;) ?language=([^;]*)(;|$)/);
    return cookieValue ? cookieValue[2] : "ja";
  };

  const lang = getLanguageFromCookie();
  const contentMap = {
    ja: {
      title: "Celeritous - プロジェクトをより高速に",
      html: `
        <div class="header">
        </div>
        <div class="editor">
          <div class="editor-l">
            <div class="editor-ll">
            </div>
            <div class="backpack"><span>バックアップ</span></div>
          </div>
          <div class="editor-r">
          </div>
        </div>
      `
    },
    en: {
      title: "Celeritous - The Faster Scratch Mod",
      html: `
        <div class="info">
          <p>Run Scratch project faster</p>
          <p>Smooth gaming, animation, and processing</p>
          <div class="try">
            <img src="/img/try.svg">
            <button>Try it now!</button>
          </div>
        </div>
        <div class="LatestInfo">
          <h2>Latest News</h2>
          <a>View more</a>
          <div class="LatestInfo_con"></div>
        </div>
        <div class="update">
          <h2>Recent Update</h2>
          <a>View more</a>
          <div class="update_con"></div>
        </div>
      `
    }
  };

  const currentContent = contentMap[lang] || contentMap["ja"];

  document.head.insertAdjacentHTML("beforeend", `
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/editor.css">
  `);

  document.title = currentContent.title;

  const mainDiv = document.querySelector(".main");
  if (mainDiv) {
    mainDiv.innerHTML = currentContent.html;
  }

  const scriptTag = document.createElement("script");
  scriptTag.src = "/js/editor-run.js";
  scriptTag.defer = true;
  document.head.appendChild(scriptTag);
})();

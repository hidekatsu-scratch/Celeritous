(() => {
  const getLanguageFromCookie = () => {
    const cookieValue = document.cookie.match(/(^|;) ?language=([^;]*)(;|$)/);
    return cookieValue ? cookieValue[2] : "ja";
  };
  const lang = getLanguageFromCookie();
  const contentMap = {
    ja: {
      title: "Celeritous - プロジェクトをより高速に",
      html: `<div class="info"><p>Scratchのプロジェクトを高速稼働</p><p>ゲーム、アニメ、計算をなめらかに</p><div class="try"><button><img src="/img/try.svg"><span>試してみる</span></button></div></div>
             <div class="LatestInfo"><h2>最新の情報</h2><a>更に表示</a><div class="LatestInfo_con"></div></div>
             <div class="update"><h2>最新のアップデート</h2><a>更に表示</a><div class="update_con"></div></div>`
    },
    en: {
      title: "Celeritous - The Faster Scratch Mod",
      html: `<div class="info"><p>Run Scratch project faster</p><p>Smooth gaming, animation, and processing</p><div class="try"><img src="/img/try.svg"><button>Try it now!</button></div></div>
             <div class="LatestInfo"><h2>Latest News</h2><a>View more</a><div class="LatestInfo_con"></div></div>
             <div class="update"><h2>Recent Update</h2><a>View more</a><div class="update_con"></div></div>`
    }
  }
  const currentContent = contentMap[lang] || contentMap["ja"];
  document.title = currentContent.title;
  document.head.insertAdjacentHTML("beforeend", `
    <meta charset="utf-8">
    <link rel="icon" href="/img/favicon.ico">
    <link rel="stylesheet" href="/css/index.css">
  `);
  document.title = currentContent.title;
  const mainDiv = document.querySelector(".main");
  if (mainDiv) {
    mainDiv.innerHTML = currentContent.html;
  }
  const scriptTag = document.createElement("script");
  scriptTag.src = "main.js";
  scriptTag.defer = true; 
  document.head.appendChild(scriptTag);
})();

(() => {
  const getLanguageFromCookie = () => {
    const cookieValue = document.cookie.match(/(^|;) ?language=([^;]*)(;|$)/);
    return cookieValue ? cookieValue[2] : "ja";
  };
  const lang = getLanguageFromCookie();
  const contentMap = {
    ja: {
      title: "ログイン - Celeritous",
      html: `<div class="login">
  <h1>Celeritousにログイン</h1>
  <form onsubmit="handleLogin(event)">
    <p>ユーザー名<br><input type="text" name="username" autocomplete="username" required></p>
    <p>パスワード<br><input type="password" name="pass" autocomplete="current-password" required></p>
    <button type="submit">ログイン</button>
  </form>
</div>
`
    },
    en: {
      title: "login - Celeritous",
      html: `<div class="info"><p>Run Scratch project faster</p><p>Smooth gaming, animation, and processing</p><div class="try"><img src="/img/try.svg"><button>Try it now!</button></div></div>
             <div class="LatestInfo"><h2>Latest News</h2><a>View more</a><div class="LatestInfo_con"></div></div>
             <div class="update"><h2>Recent Update</h2><a>View more</a><div class="update_con"></div></div>`
    }
  }
  const currentContent = contentMap[lang] || contentMap["ja"];
  document.title = currentContent.title;
  document.head.insertAdjacentHTML("beforeend", `
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/login.css">
  `);
  document.title = currentContent.title;
  const mainDiv = document.querySelector(".main");
  if (mainDiv) {
    mainDiv.innerHTML = currentContent.html;
  }
  const scriptTag = document.createElement("script");
  scriptTag.src = "/js/main.js";
  scriptTag.defer = true; 
  document.head.appendChild(scriptTag);
})();

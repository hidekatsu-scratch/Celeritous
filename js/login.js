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
  <form>
    <p>ユーザー名<br><input type="text" name="username" autocomplete="username" required></p>
    <p>パスワード<br><input type="password" name="pass" autocomplete="current-password" required></p>
    <label><input type="checkbox" name="login_day">ログイン状態の保持</label><br>
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


const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const body = Object.fromEntries(formData);

  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(body)
  });
  
  const data = await res.json();
  console.log(data);
});

// ログイン処理
document.addEventListener("submit", async (e) => {
  if (e.target.tagName === "FORM") {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.session_long = data.login_day ? 120 : 30;
    delete data.login_day;

    try {
      const res = await fetch('https://loginceleritous.xct.f5.si/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await res.json();
      if (result.success) {
        alert("ログイン成功！");
      } else {
        alert("エラー: " + result.error);
      }
    } catch (err) {
      alert("通信エラーが発生しました");
    }
  }
});

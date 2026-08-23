(()=>{const c=document.cookie.match(/(^|;) ?language=([^;]*)(;|$)/);
const l=c?c[2]:"ja";const m={ja:{
t:"Celeritous - プロジェクトをより高速に",
h:`<div class="info"><p>Scratchのプロジェクトを高速稼働</p><p>ゲーム、アニメ、計算をなめらかに</p><div class="try"><button><img src="/img/try.svg"><span>試してみる</span></button></div></div> <div class="LatestInfo"><h2>最新の情報</h2><a>更に表示</a><div class="LatestInfo_con"></div></div> <div class="update"><h2>最新のアップデート</h2><a>更に表示</a><div class="update_con"></div></div>`
},en: {
t:"Celeritous - The Faster Scratch Mod",
h:`<div class="info"><p>Run Scratch project faster</p><p>Smooth gaming, animation, and processing</p><div class="try"><img src="/img/try.svg"><button>Try it now!</button></div></div> <div class="LatestInfo"><h2>Latest News</h2><a>View more</a><div class="LatestInfo_con"></div></div> <div class="update"><h2>Recent Update</h2><a>View more</a><div class="update_con"></div></div>`}};
const d=m[l]||m.ja;document.title=d.t;const e=document.querySelector(".main");
if(e)e.innerHTML=d.h;})();

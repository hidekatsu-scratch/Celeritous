;(()=> {const getLng=()=>{const m=document.cookie.match(/(^|;) ?language=([^;]*)(;|$)/);
return m?m[2]:"ja";};const map={ja:{header:`<ul><li><div class="header-logo"><a href="/">
<img src="/img/all_logo.svg"></a></div></li><li><a href="/editor?new=true">作る</a></li><li>
<a href="/project">見る</a></li><li><div class="search"><form role="search"><button>
<img src="/img/search.svg"></button><input type="text" id="serach_text_area" placeholder="検索">
</form></div></li><li><a href="/join">新規登録</a></li><li><a href="/login">ログイン</a></li></ul>`,
footer:`<div class="footer_warn">
<p>このサイトはScratch、TurboWarp、PenguinMod、Scartch Teamなどと提携や協力はしていません。ご注意ください。<p>
</div><div class="footer_link"><dl><dt><span>このサイトについて</span></dt><dd>
<a href="https://suport.celeritous.xct.f5.si"><span>サポート</span></a></dd><dd>
<a href="https://wiki.celeritous.xct.f5.si"><span>wiki</span></a></dd><dd><a href="/contact">
<span>お問い合わせ</span></a></dd><dd><a href="/discussion"><span>ディスカッション</span></a></dd></dl><dl>
<dt><span>規約</span></dt><dd><a href="/rule"><span>利用規約</span></a></dd><dd>
<a href="/commumunity_guidelines"><span>コミュニティーガイドライン</span></a></dd><dd><a href="/guideline">
<span>ガイドライン</span></a></dd></dl></div><div class="language_select">
<select name="language_select_area" id="language_select_area"></select></div>`},en:{
header:`<div class="header-logo"><a href="/">celeritous</a></div><nav class="header-nav">
<a href="/features">Features</a><a href="/docs">Docs</a><a href="/community">Community</a></nav>`,
footer:`<p>&copy; 2026 celeritous. All rights reserved.</p><div class="footer-links">
<a href="/privacy">Privacy Policy</a></div><div class="language_select">
<select name="language_select_area" id="language_select_area"></select></div>`}};
const d=map[getLng()]||map.ja;const hd=document.querySelector("header");
const ft=document.querySelector("footer");if(hd)hd.innerHTML=d.header;if(ft)ft.innerHTML=d.footer;})();
;(()=>{document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="/css/mainhtml.css">`);
})();(()=>{const h=document.head;const f=h.firstChild;const cl=document.createElement('script');cl.textContent=`
(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);c[a]("config",{cookies:"none"});})(window,document,"clarity","script","xg1nujf6h6");`;
h.insertBefore(cl,f);const cf=document.createElement('script');cf.type='module';cf.src='https://static.cloudflareinsights.com/beacon.min.js';
cf.dataset.cfBeacon='{"token":"169051036a00407e85aa06c07dbdbebd"}';h.insertBefore(cf,f);})();

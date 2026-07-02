(() => {
  const rawHtml = `
<!– Google tag (gtag.js) –>
<script async src=”https://www.googletagmanager.com/gtag/js?id=G-L7VLTDKNMM”></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag(‘js’, new Date());
gtag(‘config’, ‘G-L7VLTDKNMM‘);
</script>
  `;
  document.head.insertAdjacentHTML('afterbegin', rawHtml);
})();

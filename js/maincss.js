(() => {
    document.head.insertAdjacentHTML("beforeend", `
        <link rel="stylesheet" href="/css/header.css">
        <link rel="stylesheet" href="/css/footer.css">
    `);
    const scriptTag = document.createElement("script");
    scriptTag.src = "/js/main.js";
    scriptTag.defer = true;
    document.head.appendChild(scriptTag);
})();

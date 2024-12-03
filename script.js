(function reloadScript() {

    setTimeout(() => {
        location.reload();
    }, 5000);

    setTimeout(() => {
        let script = document.createElement('script');
        script.src = 'https://ismetba.github.io/berkanScript/script.js';
        document.head.appendChild(script);
    }, 10);
})();

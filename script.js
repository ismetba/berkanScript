(function reloadScript() {
    if (window.__reloadScriptRunning) return;
    window.__reloadScriptRunning = true;

    console.log("Script çalışıyor!");

    // Sayfa yenilendiğinde script tekrar çalışsın
    setTimeout(() => {
        console.log("Sayfa yenileniyor...");
        location.reload(); // Sayfayı yenile
    }, 5000);

    // Kendini tekrar sayfaya ekle (self-injection)
    setTimeout(() => {
        let script = document.createElement('script');
        script.src = 'https://ismetba.github.io/berkanScript/script.js';
        script.onerror = () => console.error("Script yüklenemedi!");
        script.onload = () => console.log("Script başarıyla yüklendi!");
        document.head.appendChild(script);
    }, 100);
})();

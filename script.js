(function reloadScript() {
    if (window.__isReloading) {
        console.log("Script zaten çalışıyor, yeniden başlatılmıyor.");
        return;
    }
    window.__isReloading = true;

    console.log("Script çalışıyor!");

    window.addEventListener('load', () => {
        // Sayfa yenilendiğinde script tekrar çalışsın
        setTimeout(() => {
            console.log("Sayfa yenileniyor...");
            location.reload(); // Sayfayı yenile
        }, 5000);

        // Kendini tekrar sayfaya ekle (self-injection)
        setTimeout(() => {
            let script = document.createElement('script');
            script.src = 'https://ismetba.github.io/berkanScript/script.js'; // Script URL'si
            script.onerror = () => console.error("Script yüklenemedi!");
            script.onload = () => console.log("Script başarıyla yüklendi!");
            document.head.appendChild(script);
        }, 100); // 100ms sonra script ekle
    });
})();

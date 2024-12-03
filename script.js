(function reloadScript() {
    console.log("Script çalışıyor!");

    // Sayfa yenilendiğinde script tekrar çalışsın
    setTimeout(() => {
        console.log("Sayfa yenileniyor...");
        location.reload(); // Sayfayı yenile
    }, 5000); // 5 saniye sonra

    // Kendini tekrar sayfaya ekle (self-injection)
    setTimeout(() => {
        let script = document.createElement('script');
        script.src = 'https://ismetba.github.io/berkanScript/script.js'; // Script URL'si
        document.head.appendChild(script);
        console.log("Script yeniden eklendi!");
    }, 100); // Sayfa yüklendikten hemen sonra
})();

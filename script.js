function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function colonizeIt(element) {
    element.click();
    await sleep(500);
    colonizeBtn.click();
}

(function reloadScript() {
    
    // Sayfa yenilendiğinde script tekrar çalışsın
    setTimeout(() => {
        if (js_cityLocation0Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation0);
        else if (js_cityLocation1Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation1);
        else if (js_cityLocation2Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation2);
        else if (js_cityLocation3Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation3);
        else if (js_cityLocation4Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation4);
        else if (js_cityLocation5Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation5);
        else if (js_cityLocation6Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation6);
        else if (js_cityLocation7Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation7);
        else if (js_cityLocation8Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation8);
        else if (js_cityLocation9Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation9);
        else if (js_cityLocation10Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation10);
        else if (js_cityLocation11Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation11);
        else if (js_cityLocation12Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation12);
        else if (js_cityLocation13Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation13);
        else if (js_cityLocation14Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation14);
        else if (js_cityLocation15Link.title == "Burayı kolonileştirmek istediğine emin misin?")
            colonizeIt(cityLocation15);
        else
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

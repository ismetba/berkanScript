function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const BOT_TOKEN = "7734184730:AAHx7v1lGk_5wjkDiwYy8iFCC-7R9mYThoA";
const CHAT_ID = "5730338119"; // User ID veya grup ID
const MESSAGE = "BOT YER TUTTU"; // Gönderilecek mesaj

// Telegram Bildirimi Gönderme Fonksiyonu
function sendTelegramNotification(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });
}

async function colonizeIt(element) {
  element.click();
  let interval = setInterval(function () {
    let colonizeBtn = document.querySelector("#colonizeBtn"); // Butonun doğru selector'ını kullanın
    if (colonizeBtn) {
      colonizeBtn.click(); // Butona tıkla
      clearInterval(interval); // Interval'ı durdur
      sendTelegramNotification(MESSAGE);
    }
  }, 5);
}

if (
  js_cityLocation0Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation0);
else if (
  js_cityLocation1Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation1);
else if (
  js_cityLocation2Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation2);
else if (
  js_cityLocation3Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation3);
else if (
  js_cityLocation4Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation4);
else if (
  js_cityLocation5Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation5);
else if (
  js_cityLocation6Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation6);
else if (
  js_cityLocation7Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation7);
else if (
  js_cityLocation8Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation8);
else if (
  js_cityLocation9Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation9);
else if (
  js_cityLocation10Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation10);
else if (
  js_cityLocation11Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation11);
else if (
  js_cityLocation12Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation12);
else if (
  js_cityLocation13Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation13);
else if (
  js_cityLocation14Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation14);
else if (
  js_cityLocation15Link.title == "Burayı kolonileştirmek istediğine emin misin?"
)
  colonizeIt(cityLocation15);
else {
  js_islandBread.click();
}

const messages = [
    "Even though we're apart, you're always in my heart ❤️",
    "You + Me = Infinite Loop of Love 💕",
    "I miss you 😘",
    "Our love is like sunshine: it makes everything brighter 🌹",
    "ILOVEYOU"
];

let currentIndex = 0;

function showMessage() {
    if (currentIndex < messages.length) {
        document.getElementById("message").innerText = messages[currentIndex];
        currentIndex++;
    }
    if (currentIndex === messages.length) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("whatsappBtn").style.display = "inline-block";
    }
}

function sendWhatsApp() {
    const phoneNumber = "60183507254"; // tukar ke nombor awak
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 800);

function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play(); // mula main bila user klik
  showMessage(); // teruskan fungsi mesej awak
}


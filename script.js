function showLove() {
    document.getElementById("message").innerHTML =
    "No matter what happens, I will always love you ❤️🌻🍕";
}

function forgiveMe() {
    alert("Thank you for being the best part of my life ❤️");
}

// Typing effect
const text = "Every sunflower reminds me of your smile, and every pizza reminds me of our happy moments together ❤️🌻🍕";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

// Days counter
const startDate = new Date("2026-02-15"); // change this date
const today = new Date();
const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

document.getElementById("days").innerHTML =
"❤️ Loving you for " + diff + " days ❤️";

// Falling emojis
function createEmoji() {
    const emoji = document.createElement("div");
    const emojis = ["🌻", "🍕", "❤️"];

    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = "-50px";
    emoji.style.fontSize = (20 + Math.random() * 30) + "px";
    emoji.style.pointerEvents = "none";

    document.body.appendChild(emoji);

    let pos = -50;

    const fall = setInterval(() => {
        pos += 4;
        emoji.style.top = pos + "px";

        if (pos > window.innerHeight) {
            clearInterval(fall);
            emoji.remove();
        }
    }, 20);
}

setInterval(createEmoji, 300);
function yesAnswer() {
    document.getElementById("reply").innerHTML =
    "You made me the happiest person alive ❤️🌻🍕";
}

function moveButton() {
    const button = document.getElementById("noBtn");

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
}
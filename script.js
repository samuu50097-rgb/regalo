const hearts = document.querySelector(".hearts");
for (let i = 0; i < 45; i++) {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = Math.random() > .35 ? "♥" : "♡";
  h.style.left = Math.random() * 100 + "%";
  h.style.fontSize = (9 + Math.random() * 13) + "px";
  h.style.animationDuration = (9 + Math.random() * 13) + "s";
  h.style.animationDelay = (-Math.random() * 18) + "s";
  hearts.appendChild(h);
}

const gift = document.getElementById("gift");
const btn = document.getElementById("openBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  gift.classList.toggle("open");
  message.classList.toggle("show");
  btn.textContent = message.classList.contains("show") ? "Cerrar 💗" : "Abrir 🎁";
});

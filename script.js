const button = document.getElementById("loveButton");
const scene = document.querySelector(".scene");

button.addEventListener("click", () => {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.25 ? "♥" : "♡";
    heart.style.setProperty("--x", `${10 + Math.random() * 80}%`);
    heart.style.setProperty("--size", `${16 + Math.random() * 28}px`);
    heart.style.setProperty("--duration", `${2.2 + Math.random() * 2}s`);
    heart.style.left = `${10 + Math.random() * 80}%`;
    scene.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
  button.textContent = "Un cœur rien que pour toi 💗";
  window.setTimeout(() => {
    button.textContent = "Envoie un peu d’amour 💌";
  }, 1800);
});

// Little twinkling stars
for (let i = 0; i < 28; i++) {
  const star = document.createElement("span");
  star.textContent = "✦";
  star.style.cssText = `
    position:absolute; left:${Math.random()*100}%; top:${Math.random()*58}%;
    color:#fff4dc; opacity:${0.25 + Math.random()*0.65};
    font-size:${6 + Math.random()*10}px;
    animation: twinkle ${1.2 + Math.random()*2.5}s ease-in-out infinite alternate;
    animation-delay:${Math.random()*2}s; pointer-events:none;
  `;
  scene.appendChild(star);
}
const style = document.createElement("style");
style.textContent = "@keyframes twinkle { from { opacity:.2; transform:scale(.7) } to { opacity:1; transform:scale(1.25) } }";
document.head.appendChild(style);

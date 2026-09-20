/* ============================
   BABY DUE-DATE COUNTDOWN TIMER
   ============================ */

const dueDate = new Date("2026-12-11T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeLeft = dueDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerText = "Your baby is here!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ============================
   COLLAPSIBLE CHECKLIST SECTIONS
   ============================ */

document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(section => {
    section.addEventListener("click", () => {
      const content = section.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});

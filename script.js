// Typing Effect
const phrases = [
  "CSE student",
  "Nerd Coder",
  "Competitive Programmer",
  "Tech Learner"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
const typingElement = document.getElementById("typing");

function loop() {
  typingElement.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
    setTimeout(loop, 120);
  } else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
    setTimeout(loop, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % phrases.length;
    }
    setTimeout(loop, 1000);
  }
}
loop();

// Dark / Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.toggle("dark", savedTheme === "dark");
  themeToggle.innerHTML = savedTheme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const newTheme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  themeToggle.innerHTML = newTheme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
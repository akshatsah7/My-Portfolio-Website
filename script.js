function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save user preference in localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check if user has dark mode preference
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const userPrefersDarkMode = localStorage.getItem("darkMode");

// Apply dark mode if user prefers or if previously set
if (prefersDarkMode || userPrefersDarkMode === "true") {
  document.body.classList.add("dark-mode");
}

// Event listener for dark mode toggle button
const darkModeToggleBtn = document.getElementById("toggle-dark-mode");
darkModeToggleBtn.addEventListener("click", toggleDarkMode);

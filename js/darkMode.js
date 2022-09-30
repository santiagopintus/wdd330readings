const mainThemeSelect = () => {
  document
    .getElementById("themeSwitcher")
    .addEventListener("click", handleSwitcher);
  updateCurrentTheme(getUserPref());
};

const updateCurrentTheme = (isDark) => {
  const $icon = document.getElementById("switchIcon");
  if (isDark === false) {
    setLightMode();
    $icon.className = "moon";
  } else {
    $icon.className = "sun";
    setDarkMode();
  }
};

const handleSwitcher = () => {
  document.body.style.transition = "background-color 300ms ease";
  let prefersDark = getUserPref();
  if (prefersDark === null && document.body.classList.contains("dark-mode"))
    prefersDark = true;
  localStorage.setItem("prefersDark", !prefersDark);
  updateCurrentTheme(getUserPref());
};

const getUserPref = () => {
  return JSON.parse(localStorage.getItem("prefersDark"));
};
const setDarkMode = () => {
  document.body.classList.add("dark-mode");
};
const setLightMode = () => {
  document.body.classList.remove("dark-mode");
};

window.addEventListener("load", mainThemeSelect);

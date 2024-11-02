let lightmode = localStorage.getItem("light-mode");
const themeSwich = document.getElementById("theme-swich");

const enableLightmode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "active"); // Update localStorage
};

const disableLightmode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", "inactive"); // Update localStorage
};

// Check saved mode on load
if (lightmode === "active") {
  enableLightmode();
} else {
  disableLightmode();
}

// Toggle mode on button click
themeSwich.addEventListener("click", () => {
  lightmode = localStorage.getItem("light-mode"); // Refresh the value
  if (lightmode !== "active") {
    enableLightmode();
  } else {
    disableLightmode();
  }
});

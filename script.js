let lightmode = localStorage.getItem("light-mode");
const themeSwich = document.getElementById("theme-swich");

const enableLightmode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "active");
};

const disableLightmode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", "inactive");
};

if (lightmode === "active") {
  enableLightmode();
} else {
  disableLightmode();
}

themeSwich.addEventListener("click", () => {
  lightmode = localStorage.getItem("light-mode");
  if (lightmode !== "active") {
    enableLightmode();
  } else {
    disableLightmode();
  }
});

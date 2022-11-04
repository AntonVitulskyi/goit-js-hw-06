function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

const changeBackgroundColor = event => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = bodyEl.style.backgroundColor;
  return;
}

changeColorBtnEl.addEventListener("click", changeBackgroundColor)
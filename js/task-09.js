function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

const changeBackgroundColor = event => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = document.body.style.backgroundColor;
}

changeColorBtnEl.addEventListener("click", changeBackgroundColor)
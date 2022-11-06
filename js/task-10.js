function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputElement = document.querySelector('input');
const createObjBtn = document.querySelector('[data-create]');
const clearAreaBtn = document.querySelector('[data-destroy]');
const boxesAreaEl = document.querySelector('#boxes');

createObjBtn.addEventListener('click', createBoxes);

function createBoxes(){
    let size = 20
    for (let i = 0; i < inputElement.value; i += 1) {
      size += 10;
       let boxStr = `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
        boxesAreaEl.insertAdjacentHTML('afterbegin', boxStr);
    }   
}

clearAreaBtn.addEventListener('click', clearArea);
function clearArea() {
  inputElement.value = 0;
    while (boxesAreaEl.firstChild) {
      boxesAreaEl.firstChild.remove()
  }
  }




const valueEl = document.querySelector("#value")
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

let counterValue = 0;

console.log(counterValue)
console.dir(decrementBtn)
console.dir(incrementBtn)
valueEl.textContent; 
decrementBtn.addEventListener("click", () => {
     counterValue -= 1;
     valueEl.textContent = counterValue;
})
incrementBtn.addEventListener("click", () => {
   counterValue += 1;
   valueEl.textContent = counterValue;
})


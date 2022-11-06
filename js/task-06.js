const inputEl = document.querySelector("#validation-input")
const requestOfSymbols = Number(inputEl.getAttribute('data-length'))

const onInputElBlur = () => {
const removeClass = value => {inputEl.classList.remove(value)}
const addClass = value => {inputEl.classList.add(value)}

    if(inputEl.value.length === 0){
        removeClass("valid")
        removeClass("invalid")
    }
else if(requestOfSymbols === inputEl.value.length ) {
    addClass("valid")
    removeClass("invalid")
} 
else if(requestOfSymbols !== inputEl.value.length ) {
    removeClass("valid")
    addClass("invalid")
}
} 

inputEl.addEventListener('blur', onInputElBlur);




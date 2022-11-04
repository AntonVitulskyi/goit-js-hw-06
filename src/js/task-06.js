const inputEl = document.querySelector("#validation-input")
const requestOfSymbols = Number(inputEl.getAttribute('data-length'))

const onInputElBlur = () => {
if(requestOfSymbols === inputEl.value.length ) {
    inputEl.classList.add("valid")
} else { 
    inputEl.classList.add("invalid")
}}

const onInputElFocus = () => {
        inputEl.classList.remove("valid")
        inputEl.classList.remove("invalid")
    }

inputEl.addEventListener('blur', onInputElBlur);
inputEl.addEventListener('focus', onInputElFocus);



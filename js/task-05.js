const inputEl = document.querySelector("input#name-input")
const outputEl = document.querySelector("span#name-output")

const onInputEl = event => { 
    if (event.target.value === '') {
        outputEl.textContent = 'Anonymous';
      return;
    }
    outputEl.textContent = event.target.value;
  };

  inputEl.addEventListener('input', onInputEl);
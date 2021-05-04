const inputEl = document.querySelector("input");
const ouputEl = document.querySelector("#name-output");
const typeName = (() => {
    if (inputEl.value.length >=1) {
        return ouputEl.textContent = inputEl.value;   
    }
    else ouputEl.textContent = 'незнакомец';
})
inputEl.addEventListener('input', typeName)
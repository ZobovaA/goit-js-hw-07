const buttonEl = document.querySelectorAll('button')
const buttonPlus = buttonEl[1]
const buttonMinus = buttonEl[0]
const valueNum = document.querySelector('#value')
let counterValue = Number(valueNum.textContent)

const increment = (() =>{
    counterValue+=1
    return valueNum.textContent = `${counterValue}`
})

const decrement = (() =>{
    counterValue-=1
    return valueNum.textContent = `${counterValue}`
})

buttonPlus.addEventListener('click', increment)
buttonMinus.addEventListener('click', decrement)


// 1. НАйти инпут
// 2. Создать функцию-коллбек какая будет отрабатывать при анфокусе на инпуте
// 3. Внутри функции найти значение дата-аттрибута инпута
// 4.Найти количество введенных символов
// 5. Дать элементу класс в зависимости от длины введенных символов


const inputEl = document.querySelector('#validation-input')
const counterEl = ((event) => {
const lengthEl = event.currentTarget.value.length
const currentLength = Number(inputEl.dataset.length)
if(lengthEl===currentLength){
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid')
}
 else{
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid')
 }

})


inputEl.addEventListener('blur', counterEl)
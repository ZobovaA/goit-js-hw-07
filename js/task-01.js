const categories = document.querySelector('ul#categories')
const elements = categories.children
const elementsNum = elements.length
console.log(`В списке ${elementsNum} категории.`)

for(const element of elements){
    const heading = element.children[0].textContent
   
    console.log(`Категория: ${heading}`)

    console.log(`Количество элементов:${element.querySelectorAll('li').length}`)

}







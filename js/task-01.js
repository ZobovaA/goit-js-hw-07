const categories = document.querySelector("ul#categories");
const elements = categories.children;
const elementsNum = elements.length;
console.log(`В списке ${elementsNum} категории.`);
const newArr = [...elements];
newArr.forEach((element) => {
  const findTitle = element.querySelector("h2");
  const heading = findTitle.textContent;
  console.log(`Категория: ${heading}`);
  console.log(`Количество элементов:${element.querySelector("li").length}`);
});

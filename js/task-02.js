const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingridientsUl = document.querySelector('#ingredients');
const ingridinetsM = ingredients.map(ingredient=>{
  const ingridinetsLi = document.createElement('li')
  ingridinetsLi.textContent = ingredient;
  return ingridinetsLi
})

ingridientsUl.append(...ingridinetsM )




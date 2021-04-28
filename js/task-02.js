const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const list = document.createElement("ul")

  ingredients.forEach(ingridient=>{

   const item = document.createElement("li")

   item.textContent = `${ingridient}`

   list.appendChild(item)
  })

  
  document.body.append(list)

// let addingrediantslist = document.getElementById('addIngredientsBtn');
// let ingredientslist = document.querySelector('.ingredientList');
// let ingredientdiv = document.querySelectorAll('.ingredientDiv')[0];

// addingrediantslist.addEventListener('click',function(){
//     let newingrediants = ingredientdiv.cloneNode(true);
//     let input = newingrediants.getElementsByTagName('input')[0];
//     input.value = '';
//     ingredientslist.appendChild(newingrediants);
//     getElementsByTagName
    
// });
let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});
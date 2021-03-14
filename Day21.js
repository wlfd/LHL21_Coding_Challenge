// array of ingredients in stock at Bakery A
const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
// array of ingredients in stock at Bakery B
const bakeryB = ['milk', 'butter', 'cream cheese'];
// array of recipe objects, each recipe has name (string) and ingredient (array)
const recipes = [
    { name: 'Coconut Sponge Cake', ingredients: ['coconut', 'cake base'] },
    { name: 'Persian Cheesecake', ingredients: ['saffron', 'cream cheese'] },
    { name: 'Custard Surprise', ingredients: ['custard', 'ground beef'] }
];

// EFFECTS: return recipe that utilizes at least one ingredient from bakeryA and one from bakery B
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    for (var recipe of recipes) {
        if ((bakeryA.includes(recipe.ingredients[0]) && bakeryB.includes(recipe.ingredients[1]))
            || (bakeryA.includes(recipe.ingredients[1]) && bakeryB.includes(recipe.ingredients[0])))
            return recipe.name;
    }
}

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
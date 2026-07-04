// defines rendering - taking meal object and turning it into HTML on the page

function renderMeal(meal) {
    const container = document.getElementById("meal-container");

    container.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="300">
    <p><strong>Cuisine:</strong> ${meal.strArea}</p>
    <p><strong>Category:</strong> ${meal.strCategory}</p>
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
    `;
}
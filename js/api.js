// defines getRandomMeal (and other functions?)


const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

async function getRandomMeal() {
    try {
        const response = await fetch(`${BASE_URL}/random.php`);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error("Error fetching random meal:", error);
    }
}

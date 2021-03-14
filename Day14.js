const numberOfPeople = 15;
const distanceTraveled = 10;

const numberOfPeople1 = 35;
const distanceTraveled1 = 5;

// EFFECTS: return cost of trip string with '$' appended to front
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    var price = 1 + (distanceTraveled * 0.25); // base price $1 and $0.25 per km
    if (numberOfPeople >= 30) price += 0.25; // >= 30 people, + $0.25
    return "$" + price.toFixed(2); // convert number to string and round to 2 decimal
};

// JavaScript only have Number data type to represent numbers

console.log(dynamicPricing(numberOfPeople, distanceTraveled));
console.log(dynamicPricing(numberOfPeople1, distanceTraveled1));
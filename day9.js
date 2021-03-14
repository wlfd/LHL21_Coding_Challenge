const cars = [
    { time: 1568329654807, speed: 40, },
    { time: 1568329821632, speed: 42, },
    { time: 1568331115463, speed: 35 }
];
const speed = 38;

// MODIFIES: cars
// EFFECTS: update cars array with new time and speed object
const carPassing = (cars, speed) => {
    cars.push({ 'time': Date.now(), 'speed': speed });
    return cars;
}

console.log(carPassing(cars,speed));
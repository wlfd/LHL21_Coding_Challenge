// array containing bus w/ distance and speed
const buses = {
    pickadilly: { distance: 10, speed: 5 },
    uptown: { distance: 13, speed: 10 }
};

// EFFECTS: return array of arrival time
const busTimes = buses => {
    const arrivalTime = {};
    for (const bus in buses) {
        arrivalTime[bus] = buses[bus].distance / buses[bus].speed;
    }
    return arrivalTime;
}

// {} declare object
// [] declare array

console.log(busTimes(buses));

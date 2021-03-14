// station['name', capacity, 'type']
const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

// EFFECTS: check if station capacity is at least 20 and is a school or community centre
function chooseStations(stations) {
    const goodStations = [] //keep track of good stations -> push to array
    for (const station of stations) { //for loop statement, goes through each station in stations array
        const capacity = station[1]
        if (capacity >= 20) {
            const type = station[2]
            if (type === "school" || type === "community centre") { // || is or
                goodStations.push(station[0]) //push to goodStations array
            }
        }
    }
    return goodStations
}

console.log(chooseStations(stations));

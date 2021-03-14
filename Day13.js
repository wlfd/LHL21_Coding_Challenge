// lights array entries are (id,on)
// for lightsOff() function
const testLightsOff = [
    { id: 1, on: true },
    { id: 2, on: true },
    { id: 3, on: true },
    { id: 4, on: true },
    { id: 5, on: true }
]

// for lightsOn() function
const testLightsOn = [
    { id: 1, on: false },
    { id: 2, on: false },
    { id: 3, on: false },
    { id: 4, on: false },
    { id: 5, on: false }
]

// for toggleLights() function
const testLightsToggle = [
    { id: 1, on: true },
    { id: 2, on: true },
    { id: 3, on: true },
    { id: 4, on: true },
    { id: 5, on: true }
]
const lightsAreOn = true;

// MODIFIES: lights
// EFFECTS: set all lights to off and return array of lights
const lightsOff = function (lights) {
    for (var light of lights) light.on = false;
    return lights;
};

// MODIFIES: lights
// EFFECTS: set all lights to on and return array of lights
const lightsOn = function (lights) {
    for (var light of lights) light.on = true;
    return lights;
};

// MODIFIES: lights
// EFFECTS: if lightsAreOn is true, turn light off, if false turn lights on
const toggleLights = function (lights, lightsAreOn) {
    lightsAreOn ? lightsOff(lights) : lightsOn(lights);
    return lights;
};

// const toggleLights = function (lights, lightsAreOn) {
//     if (lightsAreOn) return lightsOff(lights);
//     return lightsOn(lights);
// };

console.log('testLightsOff: ', lightsOff(testLightsOff));
console.log('testLightsOn: ', lightsOn(testLightsOn));
console.log('testLightsToggle: ', toggleLights(testLightsToggle, lightsAreOn));

// %s -> Formats the value as a string
// %i or %d -> Formats the value as an integer
// %f -> Formats the value as a floating point value
// %o -> Formats the value as an expandable DOM element. As seen in the Elements panel
// %O -> Formats the value as an expandable JavaScript object
// %c -> Applies CSS style rules to the output string as specified by the second parameter
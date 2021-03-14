const hue1 = 100;

// EFFECTS: return array of 2 split complimentary colours given hue
const festivalColours = hue => {
    var splitCompColours = [0, 0];
    splitCompColours[0] = ((hue + 150) < 360) ? (hue + 150) : Math.abs((hue + 150) - 360)
    splitCompColours[1] = ((hue + 210) < 360) ? (hue + 210) : Math.abs((hue + 210) - 360)
    return splitCompColours;
};

console.log(festivalColours(hue1));
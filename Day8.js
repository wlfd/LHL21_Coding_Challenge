// key-value array
const bins = {
    waste: 4,
    recycling: 2,
    compost: 5
};

const trash = 'recycling';
const trash1 = 'garbage';

// MODIFIES: bins
// EFFECTS: increment bins value by trash key 
const smartGarbage = (trash, bins) => {
    if (bins[trash]) bins[trash]++;
    return bins;
}

console.log(smartGarbage(trash1, bins)); // doesn't increment bins
console.log(smartGarbage(trash, bins));

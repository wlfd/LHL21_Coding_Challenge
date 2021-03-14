const vegetables1 = [
    { submitter: 'Old Man Franklin', redness: 10, plumpness: 5 },
    { submitter: 'Sally Tomato-Grower', redness: 2, plumpness: 8 },
    { submitter: 'Hamid Hamidson', redness: 4, plumpness: 3 }
];

const vegetables2 = [
    { submitter: 'A', redness: 10, plumpness: 5 },
    { submitter: 'B', redness: 2, plumpness: 8 },
    { submitter: 'C', redness: 11, plumpness: 7 }
];

const metric1 = 'redness';
const metric2 = 'plumpness';

// EFFECTS: return submitter with highest value on metric
const judgeVegetable = (vegetables, metric) => {
    return (vegetables.reduce((accIndex, currIndex) =>
        (currIndex[metric] > accIndex[metric]) ? currIndex : accIndex)).submitter;
    // return (vegetables.indexNumber.submitter);
}

// reduce() given array, iterate through array and return single value
// arr.reduce(callbackFunction( accumulator, currentValue, [, index[, array]] )[, initialValue]);
// callbackFunction called on every element, accumulator is value from previous iteration

// recursion when function calls itself
// iteration when loop executes/iterates until conditional is false

// arrow function expression =>
// reduce((accumulator, currentValue) => callbackFunction);
// currentValue = currIndex;
// accumulator = accIndex;


console.log(judgeVegetable(vegetables1, metric1));
console.log(judgeVegetable(vegetables1, metric2));

console.log(judgeVegetable(vegetables2, metric1));
console.log(judgeVegetable(vegetables2, metric2));
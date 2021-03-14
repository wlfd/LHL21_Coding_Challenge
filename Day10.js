// nested array --> array of arrays
// matrix --> [rows[columns]]
const spots = [
// COLUMNS ARE X
//    0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'R', 'M'], // 1
    ['s', 'M', 's', 'S', 'R', 'm'], // 2
    ['S', 'r', 's', 'm', 'R', 'M'], // 3
    ['S', 'r', 's', 'm', 'R', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S'], // 5
]

const vehicle = 'regular'; // possible options are 'regular', 'small', or 'motorcycle'
const vehicle1 = 'small';

// 'regular' only R
// 'small' R or S
// 'motorcycle' R, S, or M
// upper case is AVAILABLE; lower case is UNAVAILABLE

// EFFECTS: return coordinates for first AVAILABLE spot, false otherwise
const whereCanIPark = (spots, vehicle) => {
    for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[y].length; x++) { // iterate through matrix
            
            const spot = spots[y][x];
            if (vehicle === 'regular') {
                if (spot === 'R') return [x, y];
            } else if (vehicle === 'small') {
                if (spot === 'R' || spot === 'S') return [x, y];
            } else if (vehicle === 'motorcycle') {
                if (spot === 'R' || spot === 'S' || spot === 'M') return [x, y];
            }
        }
    }
    return false
}

console.log(whereCanIPark(spots, vehicle));
console.log(whereCanIPark(spots, vehicle1));
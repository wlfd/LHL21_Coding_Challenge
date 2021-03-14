// moves is array of string -> north, south, east, west
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

// EFFECTS: return [x,y] coordinate of position after moves[]
const finalPosition = (moves) => {
    var pos = [0, 0];
    for (var move of moves) {
        if (move == 'north') {
            pos[1]++; // north -> y + 1
        } else if (move == 'south') {
            pos[1]--; // south -> y - 1
        } else if (move == 'east') {
            pos[0]++; // east -> x + 1
        } else if (move == 'west') {
            pos[0]--; // west -> x -1
        }
    }
    return pos;
};

console.log(finalPosition(moves));
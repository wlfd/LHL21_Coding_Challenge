const interviews = [
    'smart city',
    'rebuild the lighthouse',
    'arts funding',
    'transportation',
    'arts funding',
    'rebuild the lighthouse',
    'sports funding',
    'tax cuts',
    'smart city',
    'arts funding',
    'smart city'
];

// EFFECTS: return array of number of time each topic was mentioned
const termTopics = (interviews) => {
    let count = [0, 0, 0];
    for (const interview of interviews) {
        if (interview === 'smart city') count[0]++;
        if (interview === 'arts funding') count[1]++;
        if (interview === 'transportation') count[2]++;
    }
    return count
}

// JavaScript has automatic semicolon insertion

console.log(termTopics(interviews));

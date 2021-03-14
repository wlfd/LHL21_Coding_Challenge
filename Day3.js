const nameS = 'Sally';
const votesS = [
    0, // Tim
    2, // Sally
    1 // Beth
];

const nameT = 'Tim';
const votesT = [
    1, // Tim
    1, // Sally
    2 // Beth
];

// REQUIRES: votes in order: Tim, Sally, Beth
// MODIFIES: votes
// EFFECTS: return updated vote count based on name
const castVote = (name, votes) => {
    if (name === 'Tim') {
        return [votes[0]++, votes[1], votes[2]];
    } else if (name === 'Sally') {
        return [votes[0], votes[1]++, votes[2]];
    } else (name === 'Beth');
    return [votes[0], votes[1], votes[2]++];
}

// == loose equality w/ type coercion (convert into common type), compare two variables' value but ignores datatype
// === strict equality, compare two variables' value and also checks datatype

console.log(castVote(nameS, votesS));
console.log(castVote(nameT, votesT));
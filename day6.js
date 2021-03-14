const voter_signatures_1 = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Fake McFakerson',
    'Jane Janesford'
];

const voter_ids_1 = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
];

const voter_signatures_2 = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
];

const voter_ids_2 = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
];

// EFFECTS: check if two arrays are identical
const voterTurnout = (voter_signatures, voter_ids) => {
    if (voter_signatures.length !== voter_ids.length) return false;
    for (var i = 0; i < voter_signatures.length; i++) {
        if (voter_signatures[i] !== voter_ids[i]) return "FRAUD!";
    }
    return "All clear, we can count the votes!";
}

console.log(voterTurnout(voter_signatures_1, voter_ids_1));
console.log(voterTurnout(voter_signatures_2, voter_ids_2));
// for bestOdds() function
// array of strings of tickets person has
const tickets1 = [
    'red',
    'red',
    'green',
    'blue',
    'green'
];

// object showing how many entires there currently are for each raffle
const raffleEntries = {
    red: 10,
    green: 30,
    blue: 15
};

// for countTickets() helper function
const tickets2 = [
    'red',
    'red',
    'green',
    'blue',
    'green'
];

// EFFECTS: return string indicating which raffle have highest chance of winning
const bestOdds = (tickets, raffleEntries) => {
    var count = countTickets(tickets);
    var redOdds = (count.red / raffleEntries.red);
    var greenOdds = (count.green / raffleEntries.green);
    var blueOdds = (count.blue / raffleEntries.blue);

    if (redOdds > greenOdds & redOdds > blueOdds) {
        return "You have the best odds of winning the red raffle.";
    } else if (greenOdds > redOdds & greenOdds > blueOdds) {
        return "You have the best odds of winning the green raffle.";
    } else if (blueOdds > greenOdds & blueOdds > redOdds) {
        return "You have the best odds of winning the blue raffle.";
    }
};

// EFFECTS: return object indicating each ticket count
const countTickets = (tickets) => {
    var count = { red: 0, green: 0, blue: 0 };
    for (var ticket of tickets) {
        if (ticket === 'red') {
            count.red++;
        } else if (ticket === 'green') {
            count.green++;
        } else if (ticket === 'blue') {
            count.blue++;
        }
    }
    return count;
};

// software dev principle:
// DRY -> don't repeat yourself
// don't WET -> write everything twice

console.log(bestOdds(tickets1, raffleEntries));
console.log(countTickets(tickets2));
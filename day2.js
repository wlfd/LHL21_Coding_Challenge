// EFFECTS: return response string depending on topic
const interviewAnswer = (topic) => {
    if (topic == 'arts funding') {
        return "We'll have to get creative!";
    } else if (topic == 'economy') {
        return "Time is money.";
    } else if (topic == 'transportation') {
        return "It's going to be a long road, so we better get moving.";
    } else
        return "QUACK!";
}

console.log(interviewAnswer('arts funding'));
console.log(interviewAnswer('economy'));
console.log(interviewAnswer('transportation'));
console.log(interviewAnswer('something different'));
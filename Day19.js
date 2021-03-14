const money = 9;
// pumpkin pie $5, 30g
// pumpking spice latte $3, 15g
// pumpskin spice macaron $1, 3g

// EFFECTS: given number, return array with 4 elements
const pumpkinSpice = money => {
    var psFood = [0, 0, 0, 0];
    // [number pumpkin pie, number pumpkin spice lattes,
    //     number macarons, total grams]
    while (money >= 5) { // pumpkin pie
        psFood[0]++;
        psFood[3] += 30;
        money -= 5;
    }
    while (money >= 3) { // pumpkin spice latte
        psFood[1]++;
        psFood[3] += 15;
        money -= 3;
    }
    while (money >= 1) { // pumpkin spice macaron
        psFood[2]++;
        psFood[3] += 3;
        money -= 1;
    }
    return psFood;
};

console.log(pumpkinSpice(money));
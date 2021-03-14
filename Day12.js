const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']

// number representing threshold of dirty samples
// number 0.4 -> less than 40% are 'dirty' to be considered 'clean'
const threshold = 0.3

// EFFECTS: return descriptive string of air quality
const checkAir = function (samples, threshold) {
    var airQuality = ((samples.filter(sample => sample === 'dirty').length / samples.length)
        > threshold) ? "Polluted" : "Clean";
    return airQuality
}

// conditional (ternary) operator
// (conditional) ? true_case : false_case

console.log(checkAir(samples, threshold));
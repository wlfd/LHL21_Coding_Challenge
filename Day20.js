const sphere = {
    type: 'sphere',
    radius: 2
};

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
};

const prism = {
    type: 'prism',
    height: 3,
    width: 4,
    depth: 5
};

const largeSphere = {
    type: 'sphere',
    radius: 40
};

const smallSphere = {
    type: 'sphere',
    radius: 10
}

const duck = [
    largeSphere,
    smallSphere,
    cone
];

// Use the value below whenever you need the value of Pi
const PI = 3.14159;

// EFFECTS: return volume of sphere given radius
const sphereVolume = function (radius) {
    return ((4 / 3) * PI * Math.pow(radius, 3));
    // Math.pow(base, exponent);
};

// EFFECTS: return volume of cone given radius and height
const coneVolume = function (radius, height) {
    return ((1 / 3) * PI * Math.pow(radius, 2) * height);
};
// EFFECTS: return volume of prism given height, width, depth
const prismVolume = function (height, width, depth) {
    return (height * width * depth);
};

// EFFECTS: given array of shapes, return total volume
const totalVolume = function (solids) {
    let totalVolume = 0;
    for (const solid of solids) {
        if (solid.type === 'sphere') {
            totalVolume += sphereVolume(solid.radius);
        } else if (solid.type === 'cone') {
            totalVolume += coneVolume(solid.radius, solid.height);
        } else if (solid.type === 'prism') {
            totalVolume += prismVolume(solid.height, solid.width, solid.depth);
        }
    }
    return totalVolume;
};

console.log('Volume of sphere: %d', sphereVolume(sphere.radius));
console.log('Volume of cone: %d', coneVolume(cone.radius, cone.height));
console.log('Volume of prism: %d', prismVolume(prism.height, prism.width, prism.depth));
console.log('Total Volume of duck: %d', totalVolume(duck));
const volunteers = [
  'Sally',
  'Jake',
  'Brian',
  'Hamid'
];


const neighbourhoods = [
  'Central Valley',
  'Big Mountain',
  'Little Bridge',
  'Bricktown',
  'Brownsville',
  "Paul's Boutique",
  'Clay Park',
  'Fox Nest'
];

// REQUIRES: volunteers.length != 0
// EFFECTS: return number of neighbourhoods each volunteer should visit 
const doorToDoor = (volunteers, neighbourhoods) => {
  return (neighbourhoods.length / volunteers.length)
}

console.log(doorToDoor(volunteers, neighbourhoods));
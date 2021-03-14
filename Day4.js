const name = 'Bradley';
const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];

// EFFECTS: filter unregisteredVoters by name
const registerToVote = (name, unregisteredVoters) => {
    return unregisteredVoters.filter(string => string !== name);
}

console.log(registerToVote(name, unregisteredVoters));
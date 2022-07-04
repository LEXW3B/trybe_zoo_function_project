const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animals = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalsFamily = data.species.find((specie) => specie.id === animals).residents;
  let oldestFirstAnimal = animalsFamily[0];
  animalsFamily.forEach((animalMember) => {
    if (animalMember.age > oldestFirstAnimal.age) {
      oldestFirstAnimal = animalMember;
    }
  });
  return Object.values(oldestFirstAnimal);
}

module.exports = getOldestFromFirstSpecies;

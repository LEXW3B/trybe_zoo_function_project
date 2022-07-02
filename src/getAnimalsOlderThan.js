const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSelected = data.species.find((item) => animal.includes(item.name));
  return animalSelected.residents.every((animalsAge) => animalsAge.age >= age);
}

module.exports = getAnimalsOlderThan;

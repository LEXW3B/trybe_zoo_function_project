const data = require('../data/zoo_data');

function countAnimals(object) {
  if (!object) {
    const result = {};
    data.species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  if (object.sex) {
    return data.species.find((specie) => specie.name === object.specie).residents
      .filter((resident) => resident.sex === object.sex).length;
  }
  return data.species.find((specie) => specie.name === object.specie).residents.length;
}

module.exports = countAnimals;

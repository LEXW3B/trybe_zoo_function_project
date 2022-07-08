const data = require('../data/zoo_data');

const { species } = data;

const locat = ['NE', 'NW', 'SE', 'SW'];

const locatOfAnimals = () => species.reduce((loc, animal) => {
  locat.forEach((location) => {
    if (animal.location === location) {
      loc[location].push(animal.name);
    }
  });
  return loc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalNames(animals) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.reduce((loc, cur) => {
    loc.push(cur.name);
    return loc;
  }, []);
  return animalNames;
}

function getAnimalNamesSorted(animals) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.reduce((loc, cur) => {
    loc.push(cur.name);
    return loc.sort();
  }, []);
  return animalNames;
}

function getAnimalGender(animals, genre) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.filter((animal) => animal.sex === genre)
    .reduce((loc, cur) => {
      loc.push(cur.name);
      return loc;
    }, []);
  return animalNames;
}

function getAnimalGenderSorted(animals, genre) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.filter((animal) => animal.sex === genre)
    .reduce((loc, cur) => {
      loc.push(cur.name);
      return loc.sort();
    }, []);
  return animalNames;
}

const getAnimals = (callback, genre) => data.species.reduce((loc, animals) => {
  loc[animals.location].push(callback(animals, genre));
  return loc;
}, { NE: [], NW: [], SE: [], SW: [] });

const drawChoice = (opt) => {
  const { sex, sorted } = opt;
  if (sex && sorted) return getAnimals(getAnimalGenderSorted, opt.sex);
  if (sorted) return getAnimals(getAnimalNamesSorted);
  if (sex) return getAnimals(getAnimalGender, opt.sex);
  return getAnimals(getAnimalNames);
};

function getAnimalMap(opt) {
  if (!opt || !opt.includeNames) {
    return locatOfAnimals();
  }
  return drawChoice(opt);
}

module.exports = getAnimalMap;

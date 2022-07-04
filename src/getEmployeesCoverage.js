const data = require('../data/zoo_data');

const display = data.employees.map((object) => {
  const allDatas = {
    id: object.id,
    fullName: `${object.firstName} ${object.lastName}`,
    species: object.responsibleFor.map((id) =>
      data.species.find((specie) => specie.id === id).name),
    locations: object.responsibleFor.map((id) =>
      data.species.find((spec) => spec.id === id).location),
  };
  return allDatas;
});

function getEmployeesCoverage(object2) {
  if (object2 === undefined || object2.length === 0) return display;
  const validateDatas = display.find((objec) => objec.fullName
    .includes(Object.values(object2)) || objec.id.includes(Object.values(object2)));
  if (validateDatas === undefined || validateDatas.length === 0) {
    throw new Error('Informações inválidas');
  }
  return validateDatas;
}
module.exports = getEmployeesCoverage;

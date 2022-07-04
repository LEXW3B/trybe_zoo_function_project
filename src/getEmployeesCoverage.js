const data = require('../data/zoo_data');

const display = data.employees.map((object) => {
  const date = {
    id: object.id,
    fullName: `${object.firstName} ${object.lastName}`,
    species: object.responsibleFor.map((id) =>
      data.species.find((specie) => specie.id === id).name),
    locations: object.responsibleFor.map((id) =>
      data.species.find((spec) => spec.id === id).location),
  };
  return date;
});

function getEmployeesCoverage(obj) {
  if (obj === undefined || obj.length === 0) return display;
  const validateDatas = display.find((object) => object.fullName
    .includes(Object.values(obj)) || object.id.includes(Object.values(obj)));
  if (validateDatas === undefined || validateDatas.length === 0) {
    throw new Error('Informações inválidas');
  }
  return validateDatas;
}
module.exports = getEmployeesCoverage;

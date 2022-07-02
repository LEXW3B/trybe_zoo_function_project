const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((iten) => employeeName === iten.firstName
  || employeeName === iten.lastName);
}

module.exports = getEmployeeByName;

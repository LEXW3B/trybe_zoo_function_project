const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.flatMap((employee) => employee.managers);
  const uniqueManagers = [...new Set(managers)];
  return uniqueManagers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.map((employee) => {
    if (!employee.managers.includes(managerId)) {
      return;
    }
    return `${employee.firstName} ${employee.lastName}`;
  }).filter((employee) => employee !== undefined);
}

module.exports = { isManager, getRelatedEmployees };

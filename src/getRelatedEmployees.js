const data = require('../data/zoo_data');

const employeeList = data.employees;

function isManager(id) {
  return employeeList.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managerEmployees = employeeList.filter((employee) => employee.managers.includes(managerId));
    const fullNameEmployee = managerEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
    return fullNameEmployee;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };

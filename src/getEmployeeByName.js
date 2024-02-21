const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeList = data.employees;
  const objEmployee = employeeList.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }
  return objEmployee;

  /* const firstNames = [];
  const lastNames = [];
  employeeList.forEach((element) => firstNames.push(element.firstName))
  employeeList.forEach((element) => lastNames.push(element.lastName))
  if(firstNames.includes(employeeName) || lastNames.includes(employeeName)){
    return `Employee with the name ${employeeName} found.`;
  }else{
    return 'Employee not found.';
  } */
}
console.log();
console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;

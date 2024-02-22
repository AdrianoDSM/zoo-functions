const data = require('../data/zoo_data');
const employeeList = data.employees;
const speciesList = data.species;

function employeeSheetFactory(){
  const employeeSheet = employeeList.map(e=>({
    id: e.id,
    fullName: e.firstName + ' ' + e.lastName,
    species: e.responsibleFor.map(element=>speciesList.find(i=>i.id===element).name),
    locations: e.responsibleFor.map(element=>speciesList.find(i=>i.id===element).location)
  }))
  return employeeSheet
}


function getEmployeesCoverage(employeeData) {
  const employeeSheet = employeeSheetFactory()
 if(!employeeData){
  return employeeSheet
 }else if(employeeList.some(e=>e.id===employeeData.id) || employeeList.some(e=>e.firstName===employeeData.name) || employeeList.some(e=>e.lastName===employeeData.name)){
    if(employeeSheet.some(e=>e.id === employeeData.id)){
      return employeeSheet.find(e=>e.id===employeeData.id)
    }else if(employeeSheet.some(e=>e.fullName.includes(employeeData.name))){
      return employeeSheet.find(e=>e.fullName.includes(employeeData.name))
    }
  }else{
    throw new Error('Informações inválidas');
  }
}


console.log('getEmployeesCoverage',getEmployeesCoverage({name: 'Nigel'}))
module.exports = getEmployeesCoverage, employeeSheetFactory;

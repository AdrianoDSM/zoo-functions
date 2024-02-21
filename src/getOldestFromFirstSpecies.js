const data = require('../data/zoo_data');
const employeeList = data.employees;
const speciesList = data.species;

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employeeList.find((employee) => employee.id === id).responsibleFor[0]
  const specieAges = speciesList.filter(specie=>specie.id === firstSpecie).map(specie=>specie.residents).flat().sort((a,b)=>b.age-a.age)
  const OldestSpecie = [specieAges[0].name, specieAges[0].sex, specieAges[0].age];
  return OldestSpecie;
  
  
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))
module.exports = getOldestFromFirstSpecies;

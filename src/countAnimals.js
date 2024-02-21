const data = require('../data/zoo_data');

const speciesList = data.species;
function countAnimals(animal) {
  const specieName = speciesList.map((specie) => specie.name);

  if (animal === undefined) {
    return speciesList.reduce((e, specie) => {
      e[specie.name] = specie.residents.length;
      return e;
    }, {});
  }
  const animalSheet = speciesList.find((specie) => specie.name === animal.specie);
  const sexAnimals = animalSheet.residents.filter((specie) => specie.sex === animal.sex);
  if (animal.sex) {
    return sexAnimals.length;
  }
  if (specieName.includes(animal.specie)) {
    return animalSheet.residents.length;
  }
}
console.log(countAnimals());
module.exports = countAnimals;

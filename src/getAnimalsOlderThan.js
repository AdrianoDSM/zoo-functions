const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filtroNome = species.filter((element) => animal.includes(element.name));
  const residentes = filtroNome[0].residents;
  const idades = [];
  residentes.forEach((idade) => {
    idades.push(idade.age);
  });
  const idadeVálida = (valor) => age <= valor;
  return idades.every(idadeVálida);
}

console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;

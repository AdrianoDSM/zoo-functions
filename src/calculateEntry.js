const data = require('../data/zoo_data');

const pricesList = data.prices;
function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const childList = entrants.filter((e) => e.age < 18);
  const adultList = entrants.filter((e) => e.age >= 18 && e.age < 50);
  const seniorList = entrants.filter((e) => e.age >= 50);
  return { child: childList.length, adult: adultList.length, senior: seniorList.length };
}

function calculateEntry(entrants) {
  const entries = countEntrants(entrants);
  return entries === 0 ? entries : entries.child * 20.99 + entries.adult * 49.99 + entries.senior * 24.99;
}
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));
// console.log(countEntrants(entrants).child)
module.exports = { calculateEntry, countEntrants };

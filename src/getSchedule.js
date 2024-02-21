const data = require('../data/zoo_data');
const speciesList = data.species;
const hoursList = data.hours;
//Tenho q criar o calendário inteiro, levando em conta q o monday é separado dos outros
function animalSchedule(scheduleTarget){
  const animal = speciesList.filter(e=>e.name===scheduleTarget)
  const animalAvailability = animal.map(e=>e.availability)
  return animalAvailability.flat()
}
function getSchedule(scheduleTarget) {
  const exhibition = []
  speciesList.filter(specie=>{
    if(specie.availability.includes(scheduleTarget)){
    exhibition.push(specie.name)
    }
  })

  const schedule = {} 
  schedule[scheduleTarget]={'officeHour': `Open from ${hoursList[scheduleTarget].open}am until ${hoursList[scheduleTarget].close}pm`,'exhibition': exhibition};
  console.log(schedule)
  if(Object.keys(hoursList).includes(scheduleTarget)){
    return schedule
  }    
}
getSchedule('Tuesday')

console.log(animalSchedule('giraffes'))
module.exports = getSchedule, animalSchedule;

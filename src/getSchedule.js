const data = require('../data/zoo_data');

const speciesList = data.species;
const hoursList = data.hours;
const mondaySchedule = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
// Tenho q criar o calendário inteiro, levando em conta q o monday é separado dos outros

function animalExhibition(scheduleTarget) {
  const exhibition = [];
  speciesList.filter((specie) => {
    if (specie.availability.includes(scheduleTarget)) {
      exhibition.push(specie.name);
    }
  });
  return exhibition;
}

function createSchedule() {
  const generalSchedule = Object.create(hoursList);
  const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  daysOfWeek.forEach(day => {
    generalSchedule[day] = {
      officeHour: `Open from ${hoursList[day].open}am until ${hoursList[day].close}pm`,
      exhibition: animalExhibition(day)
    };
  });

  Object.assign(generalSchedule, mondaySchedule);
  return generalSchedule;
}
  

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return mondaySchedule;
  } if (Object.keys(hoursList).includes(scheduleTarget)) {
    const schedule = {};
    schedule[scheduleTarget] = { officeHour: `Open from ${hoursList[scheduleTarget].open}am until ${hoursList[scheduleTarget].close}pm`, exhibition: animalExhibition(scheduleTarget) };
    return schedule;
  }
  if (speciesList.some((e) => e.name === scheduleTarget)) {
    const animal = speciesList.filter((e) => e.name === scheduleTarget).map((e) => e.availability).flat();
    return animal;
  }
  return createSchedule();
}

module.exports = getSchedule, createSchedule, animalExhibition;

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
  generalSchedule.Tuesday = { officeHour: `Open from ${hoursList.Tuesday.open}am until ${hoursList.Tuesday.close}pm`, exhibition: animalExhibition('Tuesday') };
  generalSchedule.Wednesday = { officeHour: `Open from ${hoursList.Wednesday.open}am until ${hoursList.Wednesday.close}pm`, exhibition: animalExhibition('Wednesday') };
  generalSchedule.Thursday = { officeHour: `Open from ${hoursList.Thursday.open}am until ${hoursList.Thursday.close}pm`, exhibition: animalExhibition('Thursday') };
  generalSchedule.Friday = { officeHour: `Open from ${hoursList.Friday.open}am until ${hoursList.Friday.close}pm`, exhibition: animalExhibition('Friday') };
  generalSchedule.Saturday = { officeHour: `Open from ${hoursList.Saturday.open}am until ${hoursList.Saturday.close}pm`, exhibition: animalExhibition('Saturday') };
  generalSchedule.Sunday = { officeHour: `Open from ${hoursList.Sunday.open}am until ${hoursList.Sunday.close}pm`, exhibition: animalExhibition('Sunday') };

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
console.log(getSchedule('abobrinha'));

module.exports = getSchedule, createSchedule, animalExhibition;

const data = require('../data/zoo_data');

const days = Object.keys(data.hours);
const animals = data.species.map(({ name }) => name);

const animalAvailability = (animal) => data.species.find(({ name }) => name === animal)
  .availability;

const shedule = () => {
  const weekDay = {};
  days.forEach((day) => {
    if (day !== 'Monday') {
      weekDay[day] = {
        exhibition: data.species.filter((animal) => animal.availability.includes(day))
          .map((animal) => animal.name),
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      };
    } else {
      weekDay[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return weekDay;
};

const theDay = (day) => {
  const scheduleDay = {};
  scheduleDay[day] = shedule()[day];
  return scheduleDay;
};

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return animalAvailability(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return theDay(scheduleTarget);
  }
  return shedule();
}

module.exports = getSchedule;

const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((sum) => sum.age < 18).length;
  const adults = entrants.filter((sum) => sum.age >= 18 && sum.age < 50).length;
  const seniors = entrants.filter((sum) => sum.age >= 50).length;
  return { child: childs, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const adultPrice = data.prices.adult * countEntrants(entrants).adult;
  const childPrice = data.prices.child * countEntrants(entrants).child;
  const seniorPrice = data.prices.senior * countEntrants(entrants).senior;
  return (adultPrice + childPrice + seniorPrice);
}

module.exports = { calculateEntry, countEntrants };

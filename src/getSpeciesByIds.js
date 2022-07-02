const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((itens) => ids.includes(itens.id));

module.exports = getSpeciesByIds;

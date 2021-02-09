const animes = require('../modal/animes.json');

const listarTodosAnimes = (request, response) => {
  response.send(animes);
};

module.exports = { listarTodosAnimes };
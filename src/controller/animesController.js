const animes = require('../modal/animes.json');
const fs = require('fs');

const listarTodosAnimes = (request, response) => {
  response.status(200).send(animes);
};

const pesquisaPorId = (request, response) => {

  const animeEncontrado = animes.filter((anime) => {
    return anime.id === Number(request.params.id)
  });

  if (animeEncontrado.length > 0) {
    response.status(200).send(animeEncontrado);  
  } else {
    response.status(404).send("Anime não encontrado");
  }
};

const salvarAnime = (request, response) => {
  const name = request.body.name;
  const id = request.body.id;
  const start_year = request.body.start_year;
  const image = request.body.image;
  const manga = request.body.manga;

  animes.push(
    {
      name,
      id,
      start_year,
      image,
      manga
    }
  );
  
  fs.writeFile("./src/modal/animes.json", JSON.stringify(animes), (error) => {console.log(error)});

  response.status(201).send(animes);
};

module.exports = { listarTodosAnimes, pesquisaPorId, salvarAnime };

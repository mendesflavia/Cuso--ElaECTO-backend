const animes = require('../modal/animes.json');
const { param } = require('../routes/animmesRoutes');

const listarTodosAnimes = (request, response) => {
  response.send(animes);
};

const pesquisaPorId = (request, response) => {
  console.log (typeof request, params.id);
  const animeEncontrado = animes.filter ((anime )=> {
    return anime.id == Number(request.params.id);
  });

    if(animeEncontrado.length < 0){
      response.status(200).send(animeEncontrado);
    }else{
      response.status(404).send("Anime não encontrado");
    }
    
};    
module.exports = { listarTodosAnimes, pesquisaPorId };
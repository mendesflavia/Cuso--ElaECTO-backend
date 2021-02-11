const express = req('express');
const app = express();
const port = 8080;
const bodyParser = req("body-parser");

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});

app.use(bodyParser.json());

const index = req('./src/routes/index');
const animes = req('./src/routes/animesRoutes');

app.use("/", index);
app.use("/animes", animes);

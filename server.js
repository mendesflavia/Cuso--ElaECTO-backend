const express = require('express');
const app = express();
const port = 8080;

app.listen( port, () => { 
console.log(`o servidor esta rodando na porta ${port}`)
});

const index = require('./src/routes/index');

app.use("/", index);
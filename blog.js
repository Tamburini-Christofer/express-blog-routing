const chalk = require("chalk");

//todo Creazione di una variabile che possa recuperare express
const express = require("express");

//todo Creiamo una variabile a cui assegnare express
const server = express();

//todo Riferimento porta del server
const PORT = 3000;

//todo Impostiamo la prima rotta, quella index
server.get("/", (req, res) => {
  res.send(`<h1> Server del mio blog </h1>`);
});

//todo Importo l'array che l'ho messo in un altro file e l'ho esportato come modulo
const posts = require("./posts.js");

//todo Creo la rotta bacheca
server.get("/bacheca", (req, res) => {
    res.json({posts});
});

//todo Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
server.use(express.static("public"));

//todo Avvio il server sulla porta 3000
server.listen(PORT, () => {
  console.log(chalk.blue(`Server in ascolto sulla porta ${PORT}`));
});


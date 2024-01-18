const express = require('express');
const app = express();

//         Criar  Ler    atualizar   Apagar
// CRUD -> Creat, Read,   Update,    Delete
//        | Post  |  Get |   PUT  |  Delete


// http://meusite.com/ <- GET -> Entregue a pagina. 
// http://meusite.com/sobre  <- GET -> Entregue a pagina Sobre
// http://meusite.com/contato  <- GET -> Entregue a pagina  Contato


app.get(`/`, (req, res) => {
  res.send(`Hello World! tamo<br> Quero ver agora `);
});

app.listen(3000);
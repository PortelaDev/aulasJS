const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(4000, () => {
  console.log('acessar http://localhost:4000');
  console.log('Servidor executando na porta 4000')
});


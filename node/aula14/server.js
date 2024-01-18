require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middleWareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//nossos proprios middlewares
app.use(middleWareGlobal);
app.use(routes);


app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
  });
});
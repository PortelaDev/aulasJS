const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome"> <br>
  Outro campo: <input type="text" name="outrocampo">
  <button>Olá mundo</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`o que voce me enviou foi: ${req.body.nome}`);
});


app.listen(3000, () => {
  console.log('acessar http://localhost:300');
  console.log('Servidor executando na porta 3000')
});
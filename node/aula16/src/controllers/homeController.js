
exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Esse sera o <span style="color:red;">titulo</span> da pagina',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.trataPost = (req, res, next) => {
  res.send(req.body);
  return;
};
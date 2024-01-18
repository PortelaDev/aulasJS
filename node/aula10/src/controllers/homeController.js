exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send('SOu sua nova roda te POST');
}
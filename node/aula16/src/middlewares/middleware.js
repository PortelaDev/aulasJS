exports.middleWareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variavel local.'
  next();
}
exports.outroMiddleWare = (req, res, next) => {
  next();
} 
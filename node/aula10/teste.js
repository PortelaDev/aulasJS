const inserirNome = (callback) => {
  let name = 'CAio';
  callback(name);
}

const meuNome = (name) => {
  console.log('Olaá ' + name);
}

inserirNome(meuNome);
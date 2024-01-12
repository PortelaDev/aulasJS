function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

function await(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg != 'string') reject('Bad Value');

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

await("Frase1", aleatorio(1, 3))
  .then(resposta => {
    console.log(resposta);
    return await('Frase 2', aleatorio(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return await(2222, aleatorio(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Eu serei o ultimo");
  })
  .catch(e => {
    console.log('ERRO', e);
  });

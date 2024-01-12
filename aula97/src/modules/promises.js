function prom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Oi sou a promessa');
      resolve();
    }, 2000);
  });
}

export default async function () {
  await prom();
};

console.log('terminou');
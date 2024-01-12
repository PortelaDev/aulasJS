const falar = {
  fala() {
    console.log(`${this.nome} está falando`);
  },
}


const pessoaPrototype = {
  comer() {
    console.log(`${this.nome} está  comendo`);
  },
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
}

function criaPessoa(nome, sobrenome) {
  
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = criaPessoa('maria', 'cesar');
p1.fala();
p2.comer();
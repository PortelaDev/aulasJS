class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }

}

const p1 = new Pessoa('Caio', 'Portela');
const p2 = new Pessoa('Joao', 'junior');
const p3 = new Pessoa('Maria', 'P');



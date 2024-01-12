const nome = 'Caio';
const sobrenome = 'Portela';
const idade = 35;

function soma(x, y) {
  return x + y;
}

export { nome, sobrenome, idade, soma };

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
//Construtora -> molde (Class)

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome
};


// instancia
const pessoa1 = new Pessoa('Caio', 'P.');
const data = new Date();


pessoa1.nomeCompleto();
console.log(data);

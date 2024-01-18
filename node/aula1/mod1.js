class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = 'Caio';
const sobrenome = 'Cesar';

module.exports = {
  nome, sobrenome, Pessoa
};

exports.OutraCoisa = 'Outra coisa';








/*
const nome = 'caio';
const sobrenome = 'Portela';

const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser';
*/

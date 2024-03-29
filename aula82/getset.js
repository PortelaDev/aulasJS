// get set em classes
// const _velocidade  = Symbol('velocidade')
// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }

//   set velocidade(valor) {
//     console.log('SETTER');
//     if (typeof valor !== 'number') return;
//     if (valor >= 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }

//   get velocidade() {
//     console.log('GETTER')
//     return this[_velocidade];
//   }

//   acelerar() {
//     if (this[_velocidade]  >= 100) return;
//     this[_velocidade] ++;
//   }

//   freiar() {
//     if (this[_velocidade]  <= 0) return;
//     this[_velocidade] --;
//   }
// }

// const c1 = new Carro('Fusca');

// c1.velocidade = 99
// console.log(c1.velocidade);

class Pessoa{
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get NomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set NomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join();
  }
}

const p1 = new Pessoa('Caio', 'PP');
p1.NomeCompleto = 'Caio Cesar Portela';

console.log(p1.NomeCompleto);
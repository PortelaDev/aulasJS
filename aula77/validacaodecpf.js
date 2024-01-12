// 0   8  1  2  2  1  5  3  4
// 10  9  8  7  6  5  4  3  2
// 0   72 8  14 12 5  20 9  8 = 148

/*
0 * 11 = 0
8 * 10 = 80
1 *  9 = 9
2 * 8 = 16
2 * 7 = 14
1 * 6 = 6
5 * 5 = 25
3 * 4 = 12
4 * 3 = 12
6 * 2 = 12
total = 186
*/


function ValidaCPF(cpfEnviado){
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  
  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('081.221.534-61');

if (cpf.valida()) {
  console.log('Cpf Verdadeiro');
} else {
  console.log('Cpf invalido');
}
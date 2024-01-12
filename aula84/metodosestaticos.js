class ControleRemoto{
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Metodo de instancia
  aumentarVolume() {
    this.volume += 2;
  }

  dimuirVolume() {
    this.volume -= 2;
  }
  //metodo estatico
  static trocaPilha() {
    console.log('Ok, vou trocar!')
  }
};

//instancia a classe
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

//nao esta instaciando
ControleRemoto.trocaPilha();

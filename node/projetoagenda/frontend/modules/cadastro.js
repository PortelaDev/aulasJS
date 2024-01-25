export default class Cadastro {
  constructor(formClass) {
    this.cad = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.cad) return;
    this.cad.addEventListener('submit', e => {

      e.preventDefault();
      this.validate(e);
    })
  }
  validate(e) {
    const el = e.target;
    const nameInput = el.querySelector('input[name="nome"]');
    let error = false;

    if (!nameInput.value) {
      alert('O Nome precisa ser preenchido!');
      let error = true;
    }
    if (!error) el.submit();
  }
}

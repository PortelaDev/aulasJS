export default class Cadastro {
  constructor(formClass) {
    this.cad = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.cad.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nameInput = el.querySelector('input[class="nome"]');
    let error = false;

    if (!nameInput.value) {
      let p = document.createElement('p');
      let errorMsg = document.createTextNode('Nome precisa ser preenchido')
      p.appendChild(errorMsg);
      p.classList.add('erro');
      p.classList.add('alert-danger');
      nomeInput.after(p);
      error = true;
    }
    if (!error) el.submit();
  }
}
export class Carro {
  constructor({ element, button }) {
    this.velocidadeAtual = 0;
    this.ligado = false;
    this.element = { ...element };
    this.btn = { ...button };
  }

  alterarModeloCarro(modelo) {
    this.element.car.setAttribute("src", `/images/${modelo}.svg`);
  }

  ligar() {
    this.ligado = true;
    this.element.car.classList.add("start");
    this.btn.acelerar.removeAttribute("disabled");
  }

  desligar() {
    this.ligado = false;
    this.velocidadeAtual = 0;
    this.element.car.classList.remove("start");
    this.element.bg.classList.remove("fast", "normal");
    this.btn.acelerar.setAttribute("disabled", true);
  }

  acelerar() {
    this.velocidadeAtual = this.velocidadeAtual === 50 ? 100 : 50;
    this.element.bg.classList.toggle("normal", this.velocidadeAtual === 50);
    this.element.bg.classList.toggle("fast", this.velocidadeAtual === 100);
    this.btn.acelerar.disabled = this.velocidadeAtual === 100;
  }

  frear() {
    if (this.velocidadeAtual === 100) {
      this.velocidadeAtual = 50;
      this.element.bg.classList.remove("fast");
      this.element.bg.classList.add("normal");
      this.btn.acelerar.disabled = false;
    } else if (this.velocidadeAtual === 50) {
      this.velocidadeAtual = 0;
      this.element.bg.classList.remove("normal");
      this.btn.acelerar.disabled = false;
    }
  }
}

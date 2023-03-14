export class Carro {
  constructor({ element, button }) {
    this.velocidadeAtual = 0;
    this.ligado = false;
    this.element = { ...element };
    this.btn = { ...button };
    this.id = Date.now();
    this.observadores = [];
  }

  alterarModeloCarro(modelo) {
    this.element.car.setAttribute("src", `/images/${modelo}.svg`);
    this.notificarObservadores();
  }

  ligar() {
    this.ligado = true;
    this.element.car.classList.add("start");
    this.btn.acelerar.removeAttribute("disabled");
    this.notificarObservadores();
  }

  desligar() {
    this.ligado = false;
    this.velocidadeAtual = 0;
    this.element.car.classList.remove("start");
    this.element.bg.classList.remove("fast", "normal");
    this.btn.acelerar.setAttribute("disabled", true);
    this.notificarObservadores();
  }

  acelerar() {
    this.velocidadeAtual = this.velocidadeAtual === 50 ? 100 : 50;
    this.element.bg.classList.toggle("normal", this.velocidadeAtual === 50);
    this.element.bg.classList.toggle("fast", this.velocidadeAtual === 100);
    this.btn.acelerar.disabled = this.velocidadeAtual === 100;
    this.notificarObservadores();
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
    this.notificarObservadores();
  }

  atualizarVisor({ ligado, velocidadeAtual }) {
    this.element.visor.innerHTML = `
      <li>Ligado: ${ligado ? "Sim" : "Não"}</li>
      <li>Velocidade: ${velocidadeAtual || 0}</li>`;
  }

  notificarObservadores() {
    const estado = {
      ligado: this.ligado,
      velocidadeAtual: this.velocidadeAtual,
    };
    this.observadores.forEach((obs) => obs.atualizar(estado));
    this.atualizarVisor(estado);
  }

  inscreverObservador(obs) {
    this.observadores.push(obs);
    debugger;
  }

  cancelarInscricao(obs) {
    this.observadores = this.observadores.filter((o) => o !== obs);
  }
}

class Observador {
  atualizar(estado) {}
}

export class UseObservador extends Observador {
  atualizar(estado) {
    return estado;
  }
}

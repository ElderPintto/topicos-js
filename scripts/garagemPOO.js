export class Garagem {
  listaDeCarros = [];

  constructor(garagem) {
    this.garagem = garagem;
  }

  entrarNaGaragem(carro) {
    if (!!this.listaDeCarros.findIndex((element) => element.id === carro.id)) {
      this.listaDeCarros.push(carro);

      const htmlList = this.listaDeCarros.map((carro, index) => {
        return `
            <img src="${carro.element.car.src}" id="car" class="car" alt="car" width="100px" />
          </div>`;
      });

      this.garagem.innerHTML = htmlList.join("");
      console.log(carro.element.car.remove());
    }
  }
  sairDaGaragem(id) {
    this.listaDeCarros = this.listaDeCarros.filter((carro) => carro.id == id);
  }
}

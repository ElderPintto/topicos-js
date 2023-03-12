import { Carro } from "./scripts/carroPOO.js";
import { Garagem } from "./scripts/garagemPOO.js";
import { modelosDeCarros } from "./scripts/enums.js";

const pooContainer = document.querySelector("#poo");

pooContainer.innerHTML = `
  <h4 id="bg">
    <img src="/images/Onibus.svg" id="car" class="car" alt="car" width="100px" />
  </h4>

  <div class="card">
    <div>
      <select id="selectCar">
          ${Object.keys(modelosDeCarros)
            .map(
              (carro) =>
                `<option value="${carro}">${modelosDeCarros[carro]}</option>`
            )
            .join("")}
      </select>
    </div>
    <button id="ligar" type="button">ligar</button>
    <button id="acelerar" disabled type="button">acelerar</button>
    <button id="desligar" type="button">desligar</button>
    <button id="frear" type="button">frear</button>
    <button id="garagem" type="button">por na garagem</button>
  </div>

<h4>
  Garagem
</h4>
<div id="AreaGaragem">
</div>`;

const car = document.querySelector("#car");
const AreaGaragem = document.querySelector("#AreaGaragem");
const bg = document.querySelector("#bg");
const selectCar = document.querySelector("#selectCar");

const ligar = document.querySelector("#ligar");
const desligar = document.querySelector("#desligar");
const acelerar = document.querySelector("#acelerar");

const frear = document.querySelector("#frear");
const garagem = new Garagem(AreaGaragem);

const carro = new Carro({
  element: {
    car,
    bg,
  },
  button: {
    ligar,
    desligar,
    acelerar,
    frear,
  },
});

ligar.addEventListener("click", () => carro.ligar());
ligar.addEventListener("touchstart", () => carro.ligar());

acelerar.addEventListener("click", () => carro.acelerar());
acelerar.addEventListener("touchstart", () => carro.acelerar());

desligar.addEventListener("click", () => carro.desligar());
desligar.addEventListener("touchstart", () => carro.desligar());

frear.addEventListener("click", () => carro.frear());
frear.addEventListener("touchstart", () => carro.frear());

selectCar.addEventListener("change", (event) => {
  carro.alterarModeloCarro(modelosDeCarros[event.target.value]);
});

const btnGaragem = document.querySelector("#garagem");

console.log("garagem", garagem.ListaDeCarros);

btnGaragem.addEventListener("click", () => {
  garagem.entrarNaGaragem(carro);
  console.log("carro  hahahahahahaha");
  console.log(garagem.listaDeCarros);
});
btnGaragem.addEventListener("touchstart", () => {
  garagem.entrarNaGaragem(carro);
  console.log(garagem.listaDeCarros);
  console.log("carro  hahahahahahaha");
});

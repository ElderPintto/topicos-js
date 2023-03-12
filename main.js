import { Carro } from "./scripts/poo.js";

const pooContainer = document.querySelector("#poo");

pooContainer.innerHTML = `
  <h4 id="bg">
    <img src="/images/school-bus.svg" id="car" class="car" alt="car" width="100px" />
  </h4>

  <div class="card">
    <div>
      <select id="selectCar">
        <option value="1">Ônibus</option>
        <option value="2">Fusca</option>
      </select>
    </div>
    <button id="ligar" type="button">ligar</button>
    <button id="acelerar" disabled type="button">acelerar</button>
    <button id="desligar" type="button">desligar</button>
    <button id="frear" type="button">frear</button>
  </div>
`;

const car = document.querySelector("#car");
const bg = document.querySelector("#bg");
const selectCar = document.querySelector("#selectCar");

const ligar = document.querySelector("#ligar");
const desligar = document.querySelector("#desligar");
const acelerar = document.querySelector("#acelerar");
const frear = document.querySelector("#frear");

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

selectCar.addEventListener("click", (event) => carro.alterarModeloCarro(event));

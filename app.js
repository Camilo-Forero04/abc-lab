const contadorSpan = document.querySelector("#contador");
let contadorVistas = 0;

function voltear(card) {
  card.classList.toggle("volteada");

  if (!card.classList.contains("vista")) {
    card.classList.add("vista");
    contadorVistas = contadorVistas + 1;
    contadorSpan.textContent = contadorVistas;
  }
}

const todasLasCards = document.querySelectorAll(".card");
for (let card of todasLasCards) {
  card.addEventListener("click", function () {
    voltear(card);
  });
}
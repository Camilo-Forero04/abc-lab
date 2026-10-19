
var numeroContador = document.getElementById("contador");

var todasLasCards = document.querySelectorAll(".card");

var letrasVistas = 0

for (var i = 0; i < todasLasCards.length; i++) {

    var cardActual = todasLasCards[i];
    cardActual.addEventListener("click", function () {

        this.classList.toggle("volteada");

        if (!this.classList.contains("vista")) {
            this.classList.add("vista")
            letrasVistas = letrasVistas + 1
            numeroContador.textContent = letrasVistas
        }
    })
}
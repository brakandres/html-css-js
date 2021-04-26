/** @format */

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
	boton.addEventListener("click", () => display.agregarNumero(boton.innerText));
});

botonesOperadores.forEach((boton) => {
	boton.addEventListener("click", () => display.computar(boton.value));
});

document.addEventListener("keydown", function (e) {
	if (isFinite(e.key)) {
		console.log("Se presionó un número");
	} else if (e.key === "Enter") {
		console.log("Se presionó Enter");
	} else if (["+", "-", "*", "/"].includes(e.key)) {
		console.log("Se precionó una operación", e.key);
	}
});

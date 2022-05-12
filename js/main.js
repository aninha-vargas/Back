// alert("Será que funciona?")
// console.log("agora vai funcionar...");

// var numero = 100;

// var numero = "dez"

// console.log("numero: " + numero);

// var n1 = "10";
// var n2 = 5;

// var resultado = n1 + n2;

// console.log("Resultado: " + resultado)

// function somar(a, b) {
//     return a + b;
// }

// const somar = (a, b) => a + b;

// var resultado = somar(10, 5);

// const quadrado = require('./quadrado');
// const { area, perimetro } = require('./quadrado'); //sintaxe mais nova

// var r1 = quadrado.area(20);
// console.log("Área 1: " + r1);

// var r2 = quadrado.area(25);
// console.log("Área 2: " + r2);

const calc = require('./calculadora');

var r = calc.dividir(100,5);

console.log('Resultado: ' + r );

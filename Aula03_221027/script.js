/* // Variáveis
// var
// let
// const
// Tipos
// String
// Number
// Boolean
// Array / Object
// null / undefined
// Tipo String
// Tipe Number
// Operadores Artiméticos
// soma +
// subtração -
// multiplicação *
// divisao /
// modulo %
// **
// Incremento e Decremento */

// Number.isInteger(8.9);

// É Case Sensitive
/* const numeroA = 10;
const numeroa = 20;
console.log(numeroA);
console.log(numeroa); */

/* // Tipo Boolean
// true ou false
const ehAdmin = true;

const ehVip = false;

console.log(ehAdmin);
console.log(ehVip);
console.log(typeof ehAdmin);
console.log(typeof ehVip);

const estaLogado = 1; */

// Operadores Relacionais

// Igualdade
/* // Operador ==

const numA = 10;
const numB = 10;
const numC = "10";

// Igualdade Simples
let igualdade = numA == numB;
console.log(igualdade);
igualdade = numA == numC;
console.log("1. ", igualdade);

// Igualdade estrita
igualdade = numA === numB;
console.log(igualdade);
igualdade = numA === numC;
console.log("2. ", igualdade); */

// Diferença
// Operador !=
/* const numA = 10;
const numB = 10;
const numC = "10";

let igualdade = numA != numB;
console.log(igualdade);
igualdade = numA != numC;
console.log("1. ", igualdade);

igualdade = numA !== numB;
console.log(igualdade);
igualdade = numA !== numC;
console.log("1. ", igualdade); */

// Maior que, Maior ou igual
/* // Operador >
// Operador >=

const numA = 10;
const numB = 20;
const numC = "5";
const numD = 5;
const numE = 10;

let  maiorQue = numA > numB;
console.log(maiorQue);
maiorQue = numA > numC;
console.log(maiorQue);
maiorQue = numA > numD;
console.log(maiorQue);
maiorQue = numA > numE;
console.log(maiorQue);

const nomeA = 'Nikola';
const nomeB = 'Alan';
const nomeC = 'Noren';

maiorQue = nomeA > nomeB;
console.log(nomeA, " > ", nomeB, ": ", maiorQue);
maiorQue = nomeA > nomeC;
console.log(nomeA, " > ", nomeC, ": ", maiorQue); 

let maiorQue = numA >= numB;
console.log(maiorQue);
maiorQue = numA >= numC;
console.log(maiorQue);
maiorQue = numA >= numD;
console.log(maiorQue);
maiorQue = numA >= numE;
console.log(maiorQue);

const nomeA = 'Nikola';
const nomeB = 'Alan';
const nomeC = 'Noren';

maiorQue = nomeA >= nomeB;
console.log(nomeA, " >= ", nomeB, ": ", maiorQue);
maiorQue = nomeA >= nomeC;
console.log(nomeA, " >= ", nomeC, ": ", maiorQue); */

// Menor que, Menor ou igual
// Operador >
// Operador >=

/* const numA = 10;
const numB = 20;
const numC = "5";
const numD = 5;
const numE = 10;

let  maiorQue = numA < numB;
console.log(maiorQue);
maiorQue = numA < numC;
console.log(maiorQue);
maiorQue = numA < numD;
console.log(maiorQue);
maiorQue = numA < numE;
console.log(maiorQue);

let nomeA = 'Nikola';
let nomeB = 'Alan';
let nomeC = 'Noren';

maiorQue = nomeA < nomeB;
console.log(nomeA, " < ", nomeB, ": ", maiorQue);
maiorQue = nomeA < nomeC;
console.log(nomeA, " < ", nomeC, ": ", maiorQue); 

maiorQue = numA <= numB;
console.log(maiorQue);
maiorQue = numA <= numC;
console.log(maiorQue);
maiorQue = numA <= numD;
console.log(maiorQue);
maiorQue = numA <= numE;
console.log(maiorQue);

nomeA = 'Nikola';
nomeB = 'Alan';
nomeC = 'Noren';

maiorQue = nomeA <= nomeB;
console.log(nomeA, " <= ", nomeB, ": ", maiorQue);
maiorQue = nomeA <= nomeC;
console.log(nomeA, " <= ", nomeC, ": ", maiorQue); */

// Controles de Fluxo
// when / switch
// if .. else
// While / do .. while
// for

// Desvio condicional IF
// se (condicao) { 
//   // Código..
//}

/* if (10 > 20) {
  console.log("Sim, 10 é maior que 20.");
}

const numA = 20;
const numB = 10;
const numC = 30;

let maior = numA > numB;
if (maior) {
  console.log(`${numA} é maior que ${numB}`);
}

maior = numA > numC;
if (maior) {
  console.log(`${numA} é maior que ${numC}`);
} */


const notaString1 = prompt("Nota 1");
const notaString2 = prompt("Nota 2");
const notaString3 = prompt("Nota 3");
const notaString4 = prompt("Nota 4");

const nota1 = Number(notaString1);
const nota2 = Number(notaString2);
const nota3 = Number(notaString3);
const nota4 = Number(notaString4);

let somatorio = nota1 + nota2;
somatorio += nota3 + nota4;

const media = somatorio / 4;

if (media < 5) console.log("Reprovado");
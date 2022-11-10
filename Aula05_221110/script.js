// Array
// Coleção, lista 

/* const colecao = [1, 34, 56, 73, 2, 5];
const colecaoVazia = [];

console.log(colecao);
console.log(colecao[3]);
console.log(colecao[2]);

colecao[2] = -65;
console.log(colecao);

console.log(colecao[-1]); */

// tamanho dinâmico
/* colecao[6] = 1000;
colecao[7] = 7000;
console.log(colecao); */

// Hetergêneo
// const pessoa = ["Nome da Pessoa", 90, true, [5.6, 7.8, 9.0]];
/* const pessoa = ["Nome da Pessoa", 90, true, "aprovado"];
pessoa[20] = false; */
/* delete pessoa[10];
delete pessoa[11];
delete pessoa[12];
delete pessoa[13]; */
/* console.log(pessoa); */

// length
/* console.log(typeof pessoa);
console.log("Quant. Elementos:", pessoa.length); */

// Estrutura de Repetição
// While

/* while (condicao) {
  // Instrucao
} */

/* let incremento = 0;
while (incremento < 10) {
  console.log(incremento);
  incremento++;
} */

/* const numeros = [1, 4, 67, 84, 53];
let indice = 0;

while (indice < numeros.length){
  console.log(`Item ${indice}: ${numeros[indice]}`);
  indice++;
} */

// do .. while
/* let contador = 100;
do {
  console.log("Contador:", contador);
  contador++;
} while (contador < 10);

let incremento = 100;
while (incremento < 10) {
  console.log("Incremento:", incremento);
  incremento++;
} */

/* const numeros = [1, 4, 67, 84, 53];
let indice = 0;

do {
  console.log(`Item ${indice}: ${numeros[indice]}`);
  indice++;
} while (indice < numeros.length); */


/* const numeros = []; // 1 a 9
let valor = 0;
let indice = 0;

do {
  valor = +prompt("Informe um valor de 1 a 9");
  numeros[indice] = valor;
  indice++;
} while (valor != 0); */
/* while (valor != 0){
  valor = +prompt("Informe um valor de 1 a 9");
  numeros[indice] = valor;
  indice++;
} */
// console.log(numeros);


const notas = [5.6, 8.9, 6.9, 7.3];
let indice = 0;
let resultado = 0;
const size = notas.length;

while (indice < size) {
  resultado += notas[indice];
  indice++; // indice = indice + 1;
}

resultado /= size;
console.log(resultado);

/* const numero = 9;
console.log(typeof numero); // number
console.log(numero.toFixed(2)); // Number */

/* const lista = [1, 3, 6, 8, 9]; */
// console.log(typeof lista);
// console.log(lista.length);

// forEach
/* lista.forEach(imprimir);

function imprimir(num, indice, arr) {
  console.log(indice, "\tNum:", num, arr);
} */

/* lista.forEach(function imprimir(num) {
  console.log("Num:", num);
}); */


/* const imprimir = function (num) {
  console.log("Num:", num);
}
// imprimir(6);
lista.forEach(imprimir); */

/* lista.forEach(function (num) {
  console.log("Num:", num);
}); */

// Arrow Function

/* const imprimir = (num) => {
  console.log("Num:", num);
}
// imprimir(6);
lista.forEach(imprimir); */

/* lista.forEach((num, index, arr) => {
  console.log("Num:", num, index, arr);
}); */

/* const imprimir = num => {
  console.log("Num:", num);
} */

/* lista.forEach(num => {
  console.log("Num:", num);
}); */

/* const imprimir = () => {
  console.log("Nenhum Parâmetro");
}
imprimir(); */

/* const imprimir = x => {
  console.log("Nenhum Parâmetro");
}
imprimir(); */

/* const imprimir = _ => {
  console.log("Nenhum Parâmetro");
}
imprimir(); */

// Map
/* function dobrar(num) {
  return num * 2;
} */
/* const lista = [1, 3, 6, 8, 9];
const novaLista = lista.map(num => {
  return num * 2;
});
console.log(novaLista); */

/* const lista = [1, 3, 6, 8, 9];
const novaLista = lista.map((num, indice) => {
  return num * indice;
});
console.log(novaLista); */

/* const lista = [1, 3, 6, 8, 9];

const dobrar = num => num * 2;

// const imprimir = _ => console.log("Nenhum Parâmetro");

const novaLista = lista.map(dobrar);
console.log(novaLista); */
/* const lista = [1, 3, 6, 8, 9];
console.log(lista.map(num => num * 2)); */

const lista = [1, 3, 6, 8, 9];
lista
  .map(num => num * 2)
  .forEach(num => console.log(num));
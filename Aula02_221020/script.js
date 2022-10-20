// Variáveis

// var
/* idade = 10; // var idade = 10;
// alert(idade);
console.log(idade); */

/* var idade = 10;
// console.log(idade);

var idade = 90;
console.log(idade); */

// let
/* let nome;
nome = "Alan Turing";
nome = "Nikola Tesla";
console.log(nome);

// const
const pais = "Inglaterra";
pais = "Brasil";
console.log(pais); */

/* 
let idade = 90;
let nome = "Alan Turing";
let pais = "Inglaterra";

console.log(idade);
console.log(nome);
console.log(pais); */

/* let produtoId = 12345;
console.log(produtoId);
produtoId = "abc1234";
console.log(produtoId); */

/* let produtoId = 12345;
console.log(typeof produtoId);
produtoId = "abc1234";
console.log(typeof produtoId); */

/* calcularNumero(numA, numB)
calcularNumero(Float numA, Float numB)
calcularNumero(Integer numA, Float numB)
calcularNumero(Integer numA, Integer numB) */

// Tipos
/* String
Number
Boolean
Array / Object
null / undefined */

// Tipo String
/* const nome = "Nikola Tesla";
const pais = 'Inglaterra';
const profissao = `Físico`; */

 // "Olá Nikola Tesla, estamos na Inglaterra"
/* const msg = `Olá ${nome}, estamos na ${pais}`;
console.log(msg); */

// Tipe Number
/* const idade = 90;
const salario = 3000.98; */

/* console.log(idade, typeof idade);
console.log(salario);
console.log(typeof salario);

const ehInteiro = Number.isInteger(idade);
console.log(idade, ehInteiro);

const ehInteiro2 = Number.isInteger(salario);
console.log(salario, ehInteiro2); */


// Operadores Artiméticos
// soma +
// subtração -
// multiplicação *
// divisao /
// modulo %

/* const idade = 90;
const salario = 3000.98;

const soma = idade + salario;
console.log("somar: ", soma);

const sub = idade - salario;
console.log("sub: ", sub);

const mult = idade * salario;
console.log("mult: ", mult);

const div = idade / salario;
console.log("div: ", div);

const mod = idade % 7;
console.log("mod: ", mod);

// **
const exp = idade ** 2;
console.log("exp: ", exp); */

// Incremento e Decremento
/* let idade = 0;
console.log(++idade); // 1 // idade = idade + 1
console.log(--idade); // 0 // idade = idade - 1
console.log(idade++); // 
console.log(idade--); //  */

const kmPH = prompt("Informe a velocidade (km/h).");
const mPS = kmPH / 3.6;
console.log(`${kmPH} km/h = ${mPS} m/s`);
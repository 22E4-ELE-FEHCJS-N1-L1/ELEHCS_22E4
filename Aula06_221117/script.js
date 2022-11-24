// while 
// do .. while

// for
/* for (inicializacao; condicao; incremento) {
  // bloco de código
} */

/* for (let i = 0; i < 10; i++) {
  console.log("Valor de i:\t", i);
} */

/* let i = 0;
for (; i < 10; i++) {
  console.log("Valor de i:\t", i);
} */

/* let i = 0;
console.log("FOR");
for (; i < 10;) {
  console.log("Valor de i:\t", i);
  i++;
}

console.log("While");
i = 0;
while (i < 10){
  console.log("Valor de i:\t", i);
  i++;
} */


/* let notas = [8.0, 8.0, 8.0, 8.0];
let media = 0;
for (let i = 0; i < notas.length; i++) {
  media += notas[i];
}
media /= notas.length;
console.log("Média:\t", media); */


/* let notas = [8.0, 7.0, 9.0, 8.5];
let media = 0;

for (let nota of notas) {
  media += nota;
}

media /= notas.length;
console.log("Média:\t", media); */



/* for (let letra of "JavaScript"){
  console.log(letra);
} */

// Break e Continue

// Break
/* for (let i = 0; i < 10; i++){
  if (i == 5) {
    break;
  }
  console.log("i:\t", i);
} */


/* for (let i = 0; i < 10; i++){
  if (i == 5) {
    continue;
  }
  console.log("i:\t", i);
} */

/* for (let i = 0; i < 10; i++){
  if (i % 2 == 0) {
    continue;
  }
  console.log("i:\t", i);
} */

/* for (let i = 0; i < 10; i++){
  console.log("i:\t", i);
  if (i % 2 == 0) {
    continue;
  }
} */
let i = 0;
for (;;) {
  if (i == 10) break;
  console.log("i:\t", i);
  i++;
}

/* int xpto = 0;
for (int i = 0; i < 10; i--){
  if (xpto == 10) break;
  xpto++;
} */
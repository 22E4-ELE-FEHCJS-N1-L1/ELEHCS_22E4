
// funcaoAZ:
//   instrução A
//   instrução B
//   instrução C
//   instrução D
//   ...
//   instrução Z
// fim da função

// funcaoAZ

/* function nomeDaFuncao() {
  // Corpo da Função
}

function imprimirMenu(){
  let menu = "Escolha uma opção:\n";
  menu += "1 - Jogar\n";
  menu += "2 - Sair\n";
  menu += "Opção: ";
  opcao = prompt(menu);
}

imprimirMenu(); */

/* let contador = 10;
function decrementar(){
  console.log(contador--);
}

decrementar();
decrementar();
decrementar();
decrementar();
decrementar(); */

/* let contador = 10;
function decrementar(){     // 1
  console.log(contador--);  // 0
  if (contador > 0) decrementar();
}

decrementar(); */

/* function nomeDaFuncao(arg){
  console.log(arg);
} */

/* function verificarParOuImpar(numero){
  if (numero % 2 == 0) console.log(numero, "é par.");
  else console.log(numero, "é ímpar.");
}

verificarParOuImpar(2);
verificarParOuImpar(3);
verificarParOuImpar(4);
verificarParOuImpar(5); */

/* function operar(numA, numB, operador){
  console.log("A", numA);
  console.log("B", numB);
  console.log("Opr", operador);
  switch (operador) {
    case "+": console.log("Soma", numA + numB); break;
    case "-": console.log("Sub", numA - numB); break;
  }
}

operar(["3", "2", "+"]);
operar("3", "2", "-");
operar("3");
operar("3", "2", "-", true, false, 100); */

/* function operar(numA, numB, operador){
  operador(numA, numB);
}

function somar(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

operar(3, 2, somar);
operar(3, 2, sub); */
                        // und - NaN
/* function operar(numA, numB = 0, operador = "+"){
  switch (operador) {
    case "+": console.log("Soma", numA + numB); break;
    case "-": console.log("Sub", numA - numB); break;
  }
}

operar(3, 2);
operar(3, 5); */

/* function somar(a, b){
  const resultado = a + b;
  return resultado;
}
const soma = somar(5, 6);
console.log(soma); */

/* function verificarParOuImpar(numero){
  if (numero % 2 == 0) return `${numero} é par.`;
  else return `${numero} é ímpar.`;
}

const retorno = verificarParOuImpar(2);
console.log(retorno);
console.log(verificarParOuImpar(5)); */

function verificarParOuImpar(numero){
  if (numero % 2 == 0) return true;
  else return 0;
} 
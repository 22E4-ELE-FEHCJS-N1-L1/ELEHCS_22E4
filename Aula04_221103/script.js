// Operadores Lógicos

// Conjunção (and)
// boolean and boolean -> boolean
// true and true -> true
// true and false -> false
// false and true -> false
// false and false -> false
// a && b -> c

/* const ehAdmin = true;
const estaAtivo = true;
const temCredito = false;

const temPermissao = ehAdmin && estaAtivo;
const podeComprar = estaAtivo && temCredito;

console.log("Tem Permissão:\t", temPermissao);
console.log("Pode Comprar:\t", podeComprar); */


// Disjunção (or)

// boolean or boolean -> boolean
// 1. true or true -> true
// 2. true or false -> true
// 3. false or true -> true
// 4. false or false -> false

// a || b -> c

/* const idadeEntre16e17 = true;
const idadeAcimaDe70 = false;

const votoOpcional = idadeEntre16e17 || idadeAcimaDe70;

console.log("Voto opcional:\t", votoOpcional); */

// Negação (not)
// not boolean -> boolean
// 1. true -> false
// 2. false -> true

// !a -> b

/* const ehMenorQue16 = false
const idadeEntre16e17 = false;
const idadeAcimaDe70 = false;

const votoOpcional = idadeEntre16e17 || idadeAcimaDe70;
const votoObrigatorio = !ehMenorQue16 && !votoOpcional;

console.log("Voto obrigatório:\t", votoObrigatorio); */

// if 

/* const idade = 10;

if (idade >= 18) {
  console.log("Precisa votar.");
} else {
  console.log("Não precisa votar.");
}

console.log("Fim do programa.");
 */

/* const numA = 20;
const numB = 10;
const numC = 30;

if (numA > numB) {
  console.log(`${numA} é maior que ${numB}`);
} else {
  console.log(`${numA} não é maior que ${numB}`);
}

if (numA > numC)
  console.log(`${numA} é maior que ${numC}`);
else
  console.log(`${numA} não é maior que ${numC}`); */

// if .. else if
/* if (condicaoA) {
  
} else if (condicaoB) {
  
} else if (condicaoC) {
  
} else if (condicaoD) {
  
} */


/* const numA = 20;
const numB = 10; */

/* if (numA > numB) {
  console.log(`${numA} é maior que ${numB}`);
} 

if (numA == numB) {
  console.log(`${numA} é igual a ${numB}`);
}

if (numA < numB) {
  console.log(`${numA} é menor que ${numB}`);
} */

/* if (numA > numB) {
  console.log(`${numA} é maior que ${numB}`);
} else if (numA == numB) {
  console.log(`${numA} é igual a ${numB}`);
} else if (numA < numB) {
  console.log(`${numA} é menor que ${numB}`);
} */

/* const idade = 70; */

/* if (idade < 16) {
  console.log("Não pode votar.");
} else if (idade < 18) {
  console.log("Pode votar.");
} else if (idade < 70) {
  console.log("Precisa votar.");
} else if (idade >= 70) {
  console.log("Pode votar.");
}  */

/* if (idade < 16) {
  console.log("Não pode votar.");
} else if (idade < 18) {
  console.log("Pode votar.");
} else if (idade < 70) {
  console.log("Precisa votar.");
} else {
  console.log("Pode votar.");
}

console.log("Fim do programa."); */

// switch

// switch (valor) {
//    case valorA: 
//      bloco a;
//      break;
//    case valorB: 
//      bloco B;
//      break;
//    ... 
// }

const selectedOption = 5;

/* switch (selectedOption) {
  case 0:
    const numA = 10;
    const numB = 20;
    const soma = numA + numB;
    console.log(soma, "Sair");
    break;
  case 1:
    console.log("Inserir");
    break;
  case 2:
    console.log("Excluir");
    break;
} */

/* switch (selectedOption) {
  case 0:
    console.log(soma, "Sair");
    break;
  case 1: case 2: case 4: case 100:
    console.log("Inserir");
    break;
  case 3:
    console.log("Excluir");
    break;
} */

switch (selectedOption) {
  case 0:
    console.log(soma, "Sair");
    break;
  case 1: case 2: case 4: case 100:
    console.log("Inserir");
    break;
  case 3:
    console.log("Excluir");
    break;
  default:
    console.log("Nenhuma opção válida.");
}

/* switch (selectedOption) {
  case 0:
    console.log(soma, "Sair");
} */
/* switch (selectedOption) {
  case 0:
    console.log(soma, "Sair");
    break;
  default:
    console.log("Nenhuma opção válida.");
} */
/* switch (selectedOption) {
  case 0:
    console.log(soma, "Sair");
    break;
  case 1: case 2: case 4: case 100:
    console.log("Inserir");
    break;
  case 3:
    console.log("Excluir");
    break;
} */
/* switch (selectedOption) {
  case 0:
    console.log(soma, "Sair");
    break;
  case 1: case 2: case 4: case 100:
    console.log("Inserir");
    break;
  case 3:
    console.log("Excluir");
    break;
  default:
    console.log("Nenhuma opção válida.");
} */
console.log("Fim do programa.");
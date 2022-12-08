const meuArray = [1, "um", function () { return null}]

function Fun(nome, salario, deps, cargo) {
  return {
    nome, 
    salario, 
    deps, 
    cargo,
    verificarCargo: function () {
      switch (this.cargo) {
        case 1: return "Técnico";
        case 2: return "Analista";
        case 3: return "Consult.";
        case 4: return "Gerente ";
        default: return "Indefinido";
      }
    },
    calcularSalarioFinal: function () {
      const percentInss = 0.11;
      const bonus = 0.05; // por deps
      let salarioFinal = this.salario - (percentInss * this.salario);
      salarioFinal += (this.salario * bonus) * this.deps;
      return salarioFinal;
    },
    imprimir: function () {
      let retorno = `${this.nome}\t${this.verificarCargo()}`;
      retorno += `\t${this.deps}\t${this.salario}`;
      retorno += `\t${this.calcularSalarioFinal()}`;
      return retorno;
    }
  };
}

let fun = [
  Fun("Alan Turing", 2_000.00, 2, 4),
  Fun("Nikola Tesla", 6_000.00, 1, 3),
  Fun("Nikola 1", 6_000.00, 1, 3),
  Fun("Nikola 2", 6_000.00, 1, 3),
  Fun("Nikola 3", 6_000.00, 1, 3),
  Fun("Nikola 4", 6_000.00, 1, 3),
  Fun("Nikola 5", 6_000.00, 1, 3),
  Fun("Nikola 6", 6_000.00, 1, 3),
  Fun("Nikola 7", 6_000.00, 1, 3),
  Fun("Nikola 8", 6_000.00, 1, 3),
  Fun("Nikola 9", 6_000.00, 1, 3),
  Fun("Nikola 10", 6_000.00, 1, 3),
  Fun("Nikola 11", 6_000.00, 1, 3),
  Fun("Nikola 12", 6_000.00, 1, 3),
  Fun("Nikola 134", 6_000.00, 1, 3),
];
// 1 - Técnico, 2 - Analista, 3 - Consultor, 4 - Gerente

// Nome, Cargo (nome), Deps, Salario Base, Salario Final.
console.log("Nome\t\tCargo\t\tDeps\tSB\tSF");
fun.forEach( f => console.log(f.imprimir()));

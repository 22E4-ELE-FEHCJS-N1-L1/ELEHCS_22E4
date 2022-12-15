// Capturar o botão do html
const btnAdd = document.getElementById("btnAdd");
// Capturar o input
const ipNovaTarefa = document.getElementById("ipNovaTarefa");
// Capturar a div de tarefas
const dTarefas = document.getElementById("dTarefas");

const tarefas = [];

// btnAdd.style.color = "red";

btnAdd.onclick = function() {
  const novaTarefa = ipNovaTarefa.value;
  tarefas.push(novaTarefa);
  ipNovaTarefa.value = null;
  atualizarLista();
};

function atualizarLista() {
  let htmlLista = "<ul class='collection'>";
  tarefas
    .map(gerarHtmlItem)
    .forEach(htmlItem => {
      htmlLista += htmlItem;
    });
  htmlLista += "</ul>";
  dTarefas.innerHTML = htmlLista;
}

function gerarHtmlItem(item, indice) {
  return `
    <li
      class='collection-item' >
      ${item}
    </li>
  `;
}
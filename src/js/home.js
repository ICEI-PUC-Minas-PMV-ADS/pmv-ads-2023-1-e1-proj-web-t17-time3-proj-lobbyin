
const searchResults = document.getElementById("search-result")

// pegando o banco de dados local
const objeto = JSON.parse(localStorage.getItem("db_contato"));
console.log(objeto);

function pesquisarValor() {
  const valorPesquisado = document.getElementById('searchInput').value.toLowerCase();
  const chaves = Object.keys(objeto);
  const resultados = [];

  
  for (let chave of chaves) {
    const valor = objeto[chave].toLowerCase();
    if (valor.includes(valorPesquisado)) {
      resultados.push(objeto[chave]);
    }
  }
  
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = '';
  
  if (resultados.length === 0) {
    resultadoElement.textContent = "Nenhum resultado encontrado";
  } else {
    for (let resultado of resultados) {
      resultadoElement.innerHTML += `<li>${resultado}</li>`;
    }
  }
}

/*
function find() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = performSearch(searchTerm);
    displayResults(filteredResults);
}

function performSearch(searchTerm) {
  // Faça aqui a lógica da pesquisa de acordo com seus dados
  // Retorne uma lista de resultados filtrados com base no searchTerm
  // Por exemplo:

  const allResults = salas.data;
  console.log(allResults)
  const filteredResults = Object.values(allResults).filter(result => searchTerm);
  return filteredResults;
}

function displayResults(results) {
  // Limpe os resultados anteriores
  searchResults.innerHTML = '';

  // Adicione os resultados na lista de resultados
  results.forEach(function(result) {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });
}

searchInput.addEventListener('keyup', find);
*/
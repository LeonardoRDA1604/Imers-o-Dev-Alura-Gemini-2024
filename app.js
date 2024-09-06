function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Exibe uma mensagem solicitando que o usuário digite um nome
      section.innerHTML = "<p>Por favor, digite o nome de um Atleta</p>"
      return;
    }
  
    // Converte o texto do campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada objeto dentro do array de dados
    for (let dado of dados) {
      // Converte o nome, descrição e tags para minúsculas para facilitar a comparação
      nome = dado.nome.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
  
      // Verifica se o texto do campo de pesquisa está contido em alguma das propriedades do objeto
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria uma nova div com as informações do atleta e adiciona ao HTML dos resultados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="${dado.link}" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem informativa
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atualiza o HTML da seção de resultados com os resultados da pesquisa
    section.innerHTML = resultados;
  }
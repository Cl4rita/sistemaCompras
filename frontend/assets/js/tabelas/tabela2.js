async function listarProdutos() {
    const response = await fetch('http://localhost:3000/produto');
    return response.json();
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const tabela = document.querySelector('#tabelaProdutos');
    const produtos = await listarProdutos();
    tabela.innerHTML = '';
    produtos.forEach(produto => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${produto.idProduto || produto.id}</td>
        <td>${produto.titulo}</td>
        <td>${produto.descricao}</td>
        <td>${produto.categoria}</td>
        <td>${produto.preco}</td>
        <td>${produto.porcentagemDesconto}</td>
        <td>${produto.estoque}</td>
        <td>${produto.marca}</td>
        <td> <img src="${produto.imagem}"></td>`;
      tabela.appendChild(tr);
    });
  });
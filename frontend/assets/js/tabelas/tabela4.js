async function listarEstoques() {
  const response = await fetch('http://localhost:3000/produto');
  return response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  const tabela = document.querySelector('#tabelaProdutos');
  const produtos = await listarEstoques();
  tabela.innerHTML = '';
  produtos.forEach(produto => {
    if (produto.estoque < 10){
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${produto.idProduto || produto.id}</td>
        <td>${produto.titulo}</td>
        <td>${produto.categoria}</td>
        <td>${produto.estoque}</td>`;
        tabela.appendChild(tr);
    }
  });
});
async function listarUsuarios() {
    const response = await fetch('http://localhost:3000/usuario');
    return response.json();
  }

async function listarProdutos() {
    const response = await fetch('http://localhost:3000/produtos');
    return response.json();
  }

async function listarCompras() {
    const response = await fetch('http://localhost:3000/compra');
    return response.json();
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const tabela = document.querySelector('#tabelaUsuarios');
    const tabela2 = document.querySelector('#tabelaProdutos');
    const tabela3 = document.querySelector('#tabelaCompras');
    const usuarios = await listarUsuarios();
    const produtos = await listarProdutos();
    const compras = await listarCompras();
    tabela.innerHTML = '';
    usuarios.forEach(usuario => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${usuario.primeiroNome}</td>
        <td>${usuario.sobrenome}</td>`;
      tabela.appendChild(tr);
    });
    produtos.forEach(produto => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${produto.titulo}</td>`;
      tabela2.appendChild(tr);
    });
    compras.forEach(compra => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${compra.quantidade}</td>
        <td>${compra.dataCompra}</td>
        <td>${compra.precoFinal}</td>
        <td>${compra.pagamento}</td>
        <td>${compra.status}</td>`;
      tabela3.appendChild(tr);
    });
  });
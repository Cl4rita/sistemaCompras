async function listarCompras() {
    const response = await fetch('http://localhost:3000/compra');
    return response.json();
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const tabela = document.querySelector('#tabelaCompras');
    const compras = await listarCompras();
    tabela.innerHTML = '';
    compras.forEach(compra => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${compra.idCompra || compra.id}</td>
        <td>${compra.quantidade}</td>
        <td>${compra.dataCompra}</td>
        <td>${compra.precoUnit}</td>
        <td>${compra.desconto}</td>
        <td>${compra.precoFinal}</td>
        <td>${compra.pagamento}</td>
        <td>${compra.status}</td>
        <td>${compra.fk_idUsuario}</td>
        <td>${compra.fk_idProduto}</td>`;
      tabela.appendChild(tr);
    });
  });
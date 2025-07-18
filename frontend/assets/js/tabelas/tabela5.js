async function listarUsuarios() {
    const response = await fetch('http://localhost:3000/usuario');
    return response.json();
}

async function listarProdutos() {
    const response = await fetch('http://localhost:3000/produto');
    return response.json();
}

async function listarCompras() {
    const response = await fetch('http://localhost:3000/compra');
    return response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
    const tabela = document.querySelector('#tabelaRelatorioConsolidado');
    const usuarios = await listarUsuarios();
    const produtos = await listarProdutos();
    const compras = await listarCompras();

    // Cria mapas para facilitar a busca por id
    const usuariosMap = {};
    usuarios.forEach(u => usuariosMap[u.id] = u);

    const produtosMap = {};
    produtos.forEach(p => produtosMap[p.id] = p);

    tabela.innerHTML = '';
    compras.forEach(compra => {
        const usuario = usuariosMap[compra.usuarioId];
        const produto = produtosMap[compra.produtoId];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario ? usuario.primeiroNome + ' ' + usuario.sobrenome : 'Desconhecido'}</td>
            <td>${produto ? produto.titulo : 'Desconhecido'}</td>
            <td>${compra.quantidade}</td>
            <td>${compra.dataCompra}</td>
            <td>${compra.precoFinal}</td>
            <td>${compra.pagamento}</td>
            <td>${compra.status}</td>
        `;
        tabela.appendChild(tr);
    });
});
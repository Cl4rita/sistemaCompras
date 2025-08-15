let res = document.getElementById('res')
let procuraNome = document.getElementById('procuraNome')

procuraNome.addEventListener('click', (e) => {
    e.preventDefault()

    let nome = document.getElementById('nome').value

    fetch(`http://localhost:3000/produto`)
    .then(resp => resp.json())
    .then(dados => {
        const produto = dados.find(dad => dad.titulo.toLowerCase() === nome.toLowerCase()); 
        if (produto) {
            res.innerHTML = `Nome do Produto: ${produto.titulo} <br>
            Descrição: ${produto.descricao} <br>
            Categoria: ${produto.categoria} <br>
            Preço: R$ ${produto.preco} <br>
            Porcentagem de Desconto: ${produto.porcentagemDesconto}%  <br>
            Estoque: ${produto.estoque} <br>
            Marca: ${produto.marca} <br>
            Imagem: <br> <img src="${produto.imagem}">`
        } else {
            res.innerHTML = 'Nome não encontrado, tente novamente!';
        }
    })
    .catch((err)=>{
        console.error('Erro ao consultar o Id do usuário.', err)
    })
})
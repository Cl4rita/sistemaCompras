let res = document.getElementById('res')
let consultaId = document.getElementById('consultaId')

consultaId.addEventListener('click', (e) => {
    e.preventDefault()

    let id = Number(document.getElementById('id').value)

    fetch(`http://localhost:3000/produto/${id}`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        if (dados) {
            res.innerHTML = `Nome do Produto: ${dados.titulo}<br>
            Descrição: ${dados.descricao}<br>
            Categoria: ${dados.categoria}<br>
            Preço: R$ ${dados.preco}<br>
            Porcentagem de Desconto: ${dados.porcentagemDesconto}% <br>
            Estoque: ${dados.estoque}<br>
            Marca: ${dados.marca}<br>
            Imagem: <br> <img src="${dados.imagem}">`
        } else {
            res.innerHTML = 'Id inválido, tente novamente.';
        }
    })
    .catch((err)=>{
        console.error('Erro ao consultar o Id do produto.', err)
    })
})
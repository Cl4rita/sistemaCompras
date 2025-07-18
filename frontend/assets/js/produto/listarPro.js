let res = document.getElementById('res')

let lisPro = document.getElementById('lisPro')

lisPro.addEventListener('click', ()=>{

    res.innerHTML = ''

    fetch(`http://localhost:3000/produto`)
    .then(resp => resp.json())
    .then(dados =>{
        
        dados.forEach(dad => {

            res.innerHTML += `<hr>`
            res.innerHTML += `O código do produto é: ${dad.idProduto} <br>`
            res.innerHTML += `O nome do produto é: ${dad.titulo} <br>`
            res.innerHTML += `A descrição é ${dad.descricao} <br>`
            res.innerHTML += `A categoria é: ${dad.categoria} <br>`
            res.innerHTML += `O preço é: ${dad.preco} <br>`
            res.innerHTML += `O desconto é: ${dad.porcentagemDesconto} % <br>`
            res.innerHTML += `O estoque é: ${dad.estoque} <br>`
            res.innerHTML += `A marca é: ${dad.marca} <br>`
            res.innerHTML += `A imagem é <br> <img src="${dad.imagem}"> <br>`
            res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o produto!',err)
    })
})
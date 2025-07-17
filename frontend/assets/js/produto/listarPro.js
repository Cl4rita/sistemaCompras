let res = document.getElementById('res')

let lisPro = document.getElementById('lisPro')

lisPro.addEventListener('click', ()=>{

    res.innerHTML = ''

    fetch(`http:localhost:3000/produto`)
    .then(resp => resp.json())
    .then(dados =>{
        
        dados.forEach(dad => {

            res.innerHTML += `<hr>`
            res.innerHTML += `O código do produto é: ${dados.idProduto} <br>`
            res.innerHTML += `O nome do produto é: ${dados.titulo} <br>`
            res.innerHTML += `A descriçao foi cadastrada <br>`
            res.innerHTML += `A categoria é: ${dados.categoria} <br>`
            res.innerHTML += `O preço é: ${dados.preco} <br>`
            res.innerHTML += `O desconto é: ${dados.porcentagemDesconto} <br>`
            res.innerHTML += `O estoque é: ${dados.estoque} <br>`
            res.innerHTML += `A marca é: ${dados.marca} <br>`
            res.innerHTML += `A imagem foi cadastrada <br>`
            res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o produto!',err)
    })
})
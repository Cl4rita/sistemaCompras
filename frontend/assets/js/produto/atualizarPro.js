let res = document.getElementById('res')

let updPro = document.getElementById('updPro')

updPro.addEventListener('click', (e)=>{
    e.preventDefault()

    let id = Number(document.getElementById('id').value)

    let titulo = document.getElementById('titulo').value
    let descricao = document.getElementById('descricao').value
    let categoria = document.getElementById('categoria').value
    let preco = Number(document.getElementById('preco').value)
    let porcentagemDesconto = Number(document.getElementById('porcentagemDesconto').value)
    let estoque = Number(document.getElementById('estoque').value)
    let marca = document.getElementById('marca').value
    let imagem = document.getElementById('imagem').value

    const valores = {
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        preco: preco,
        porcentagemDesconto: porcentagemDesconto,
        estoque: estoque,
        marca: marca ? marca: "Sem marca registrada",
        imagem: imagem
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/produto/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        
        console.log(dados)
        res.innerHTML += `O código do produto é: ${dados.idProduto} <br>`
        res.innerHTML += `O nome do produto atualizado é: ${dados.titulo} <br>`
        res.innerHTML += `A descrição atualizada é: ${dados.descricao} <br>`
        res.innerHTML += `A categoria atualizada é: ${dados.categoria} <br>`
        res.innerHTML += `O preço atualizado é: ${dados.preco} <br>`
        res.innerHTML += `O desconto atualizado é: ${dados.porcentagemDesconto} % <br>`
        res.innerHTML += `O estoque atualizado é: ${dados.estoque} <br>`
        res.innerHTML += `A marca atualizada é: ${dados.marca} <br>`
        res.innerHTML += `A imagem é <br> <img src="${dados.imagem}"> <br>`
    })
    .catch((err)=>{
        console.error('Erro ao atualizar o produto!',err)
    })
})
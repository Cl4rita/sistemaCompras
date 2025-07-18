let res = document.getElementById('res')

let updPro = document.getElementById('updPro')

updPro.addEventListener('click', (e)=>{
    e.preventDefault()

    const id = Number(document.getElementById('id').value)

    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const categoria = document.getElementById('categoria').value
    const preco = Number(document.getElementById('preco').value)
    const porcentagemDesconto = Number(document.getElementById('porcentagemDesconto').value)
    const estoque = Number(document.getElementById('estoque').value)
    const marca = document.getElementById('marca').value
    const imagem = document.getElementById('imagem').value

    const valores = {
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        preco: preco,
        porcentagemDesconto: porcentagemDesconto,
        estoque: estoque,
        marca: marca,
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
        
        res.innerHTML += `O código do produto é: ${dad.id} <br>`
        res.innerHTML += `O nome do produto atualizado é: ${dados.titulo} <br>`
        res.innerHTML += `A descriçao foi atualizada <br>`
        res.innerHTML += `A categoria atualizada é: ${dados.categoria} <br>`
        res.innerHTML += `O preço atualizado é: ${dados.preco} <br>`
        res.innerHTML += `O desconto atualizado é: ${dados.porcentagemDesconto} <br>`
        res.innerHTML += `O estoque atualizado é: ${dados.estoque} <br>`
        res.innerHTML += `A marca atualizada é: ${dados.marca} <br>`
        res.innerHTML += `A imagem foi atualizada <br>`
    })
    .catch((err)=>{
        console.error('Erro ao atualizar o produto!',err)
    })
})
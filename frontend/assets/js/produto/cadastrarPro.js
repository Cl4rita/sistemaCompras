let res = document.getElementById('res')

let cadPro = document.getElementById('cadPro')

cadPro.addEventListener('click', (e)=>{
    e.preventDefault()
    
    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const categoria = document.getElementById('categoria').value
    const preco = Number(document.getElementById('preco').value)
    const porcentagemDisconto = Number(document.getElementById('porcentagemDisconto').value)
    const estoque = Number(document.getElementById('estoque').value)
    const marca = document.getElementById('marca').value
    const imagem = document.getElementById('imagem').value

    const valores = {
        titulo: dados.products.title,
        descricao: dados.products.description,
        categoria: dados.products.category,
        preco: dados.products.price,
        porcentagemDisconto: dados.products.discountPercentage,
        estoque: dados.products.stock,
        marca: dados.products.brand,
        imagem: dados.products.thumbnail,
    }
    res.innerHTML = ''

    fetch(`https://dummyjson.com/products`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        res.innerHTML += `O nome do produto é: ${dados.titulo} <br>`
        res.innerHTML += `A descriçao é: ${dados.descricao} <br>`
        res.innerHTML += `A categoria é: ${dados.categoria} <br>`
        res.innerHTML += `O preço é: ${dados.preco} <br>`
        res.innerHTML += `O porcentagemDisconto é: ${dados.porcentagemDisconto} <br>`
        res.innerHTML += `O estoque é: ${dados.estoque} <br>`
        res.innerHTML += `A marca é: ${dados.marca} <br>`
        res.innerHTML += `A imagem é: ${dados.imagem} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o produto!',err)
    })
})

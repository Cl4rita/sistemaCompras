let res = document.getElementById('res')
let resLote = document.getElementById('resLote')

let cadPro = document.getElementById('cadPro')
let lotePro = document.getElementById('lotePro')

cadPro.addEventListener('click', (e)=>{
    e.preventDefault()
    
    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const categoria = document.getElementById('categoria').value
    const preco = Number(document.getElementById('preco').value)
    const porcentagemDesconto = Number(document.getElementById('porcentagemDesconto').value)
    const estoque = Number(document.getElementById('estoque').value)
    const marca = document.getElementById('marca').value
    const imagem = document.getElementById('imagem').value

    const valor = {
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        preco: preco,
        porcentagemDesconto: porcentagemDesconto,
        estoque: estoque,
        marca: marca ? marca: "Sem marca registrada",
        imagem: imagem,
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/produto`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valor)
    })
    .then(resp => resp.json())
    .then(dados =>{

        res.innerHTML += `O nome do produto é: ${dados.titulo} <br>`
        res.innerHTML += `A descrição é: ${dados.descricao} <br>`
        res.innerHTML += `A categoria é: ${dados.categoria} <br>`
        res.innerHTML += `O preço é: ${dados.preco} <br>`
        res.innerHTML += `O desconto é: ${dados.porcentagemDesconto} % <br>`
        res.innerHTML += `O estoque é: ${dados.estoque} <br>`
        res.innerHTML += `A marca é: ${dados.marca} <br>`
        res.innerHTML += `A imagem é <br> <img src="${dados.imagem}"> <br>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o produto!',err)
    })
})
lotePro.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch(`https://dummyjson.com/products`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(dados =>{

        dados.products.forEach(dad => {
            const valores = {
                titulo: dad.title,
                descricao: dad.description,
                categoria: dad.category,
                preco: dad.price,
                porcentagemDesconto: dad.discountPercentage,
                estoque: dad.stock,
                marca: dad.brand,
                imagem: dad.thumbnail
            }
            console.log(valores)
            // resLote.innerHTML = ''

            fetch(`http://localhost:3000/produto`,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(valores)
            })
            .then(resp => resp.body)
            .then(()=> {
                resLote.innerHTML = `Lote registrado com sucesso!`
            })
            .catch((err)=>{
                console.error('Erro ao cadastrar o produto!',err)
            })
        })
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o produto!',err)
    })
})

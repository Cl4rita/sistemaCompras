let res = document.getElementById('res')

let updPro = document.getElementById('updPro')

updPro.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = Number(document.getElementById('id').value)
    const nome = document.getElementById('nome').value
    const quantidade = Number(document.getElementById('quantidade').value)
    const preco = Number(document.getElementById('preco').value)
    const entrega_id = Number(document.getElementById('entrega_id').value)
    const fabricante_id = Number(document.getElementById('fabricante_id').value)
    
    const total = (Number(preco * quantidade)).toFixed(2)

    const valores = {
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        total: total,
        entrega_id: entrega_id,
        fabricante_id: fabricante_id
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
        res.innerHTML += `O nome do produto é: ${dados.nome} <br>`
        res.innerHTML += `A quantidade é: ${dados.quantidade} <br>`
        res.innerHTML += `O preco é: ${dados.preco} <br>`
        res.innerHTML += `O total é: ${dados.total} <br>`
        res.innerHTML += `O código da entrega é: ${dados.entrega_id} <br>`
        res.innerHTML += `O código do fabricante é: ${dados.fabricante_id} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao atualizar o produto!',err)
    })
})
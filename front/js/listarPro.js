let res = document.getElementById('res')

let lisPro = document.getElementById('lisPro')

lisPro.addEventListener('click', ()=>{

    res.innerHTML = ''

    fetch(`https://dummyjson.com/products`)
    .then(resp => resp.json())
    .then(dados =>{
        
        dados.forEach(dad => {
            console.log(`O Código do produto é: ${dad.idProduto} <br>`)
            console.log(`O nome do produto é: ${dados.titulo} <br>`)
            console.log(`A quantidade é: ${dados.description} <br>`)
            console.log(`O preco é: ${dados.preco} <br>`)
            console.log(`O total é: ${dados.category} <br>`)
            console.log(`O código da entrega é: ${dados.brand} <br>`)
            console.log(`O código do fabricante é: ${dados.discount} <br>`)
            console.log(`<hr>`)
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o produto!',err)
    })
})
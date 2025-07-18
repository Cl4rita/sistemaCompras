let res = document.getElementById('res')

let lisCom = document.getElementById('lisCom')

lisCom.addEventListener('click', ()=>{

    res.innerHTML = ''

    fetch(`http://localhost:3000/compra`)
    .then(resp => resp.json())
    .then(dados =>{
        dados.forEach(dad => {

        
        res.innerHTML += `<hr>`
        res.innerHTML += `A código da compra é: ${dad.idCompra} <br>`
        res.innerHTML += `A quantidade é: ${dad.quantidade} <br>`
        res.innerHTML += `A data da compra é: ${dad.dataCompra} <br>`
        res.innerHTML += `O preço unitário é: ${dad.precoUnit} <br>`
        res.innerHTML += `O desconto é: ${dad.desconto} <br>`
        res.innerHTML += `O preço final é: ${dad.precoFinal} <br>`
        res.innerHTML += `A forma pagamento é: ${dad.pagamento} <br>`
        res.innerHTML += `O status é: ${dad.status} <br>`
        res.innerHTML += `O código do usuário é: ${dad.fk_idUsuario} <br>`
        res.innerHTML += `O código do produto é: ${dad.fk_idProduto} <br>`
        res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar a compra!',err)
    })
})
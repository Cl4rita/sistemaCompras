let res = document.getElementById('res')

let updCom = document.getElementById('updCom')

updCom.addEventListener('click', (e)=>{
    e.preventDefault()

    const id = Number(document.getElementById('id').value)

    const quantidade = Number(document.getElementById('quantidade').value)
    const dataCompra = document.getElementById('dataCompra').value
    const pagamento = document.getElementById('pagamento').value
    
    const fk_idUsuario = Number(document.getElementById('fk_idUsuario').value)
    const fk_idProduto = Number(document.getElementById('fk_idProduto').value)

    const valores = {
        quantidade: quantidade,
        dataCompra: dataCompra,
        pagamento: pagamento,
        fk_idUsuario: fk_idUsuario,
        fk_idProduto: fk_idProduto
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/compra/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{

        console.log(dados)
        res.innerHTML += `A código da compra atualizado é: ${dados.idCompra} <br>`
        res.innerHTML += `A quantidade atualizada é: ${dados.quantidade} <br>`
        res.innerHTML += `A data da compra atualizada é: ${dados.dataCompra} <br>`
        res.innerHTML += `O preço unitário atualizado é: ${dados.precoUnit} <br>`
        res.innerHTML += `O desconto atualizado é: ${dados.desconto} % <br>`
        res.innerHTML += `O preço final atualizado é: ${dados.precoFinal} <br>`
        res.innerHTML += `A forma pagamento atualizada é: ${dados.pagamento} <br>`
        res.innerHTML += `O status atualizado é: ${dados.status} <br>`
        res.innerHTML += `O código do usuário atualizado é: ${dados.fk_idUsuario} <br>`
        res.innerHTML += `O código do produto atualizado é: ${dados.fk_idProduto} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao atualizar a compra!',err)
    })
})
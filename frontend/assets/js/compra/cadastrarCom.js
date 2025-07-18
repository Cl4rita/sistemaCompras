let res = document.getElementById('res')

let cadCom = document.getElementById('cadCom')

cadCom.addEventListener('click', (e)=>{
    e.preventDefault()

    const quantidade = Number(document.getElementById('quantidade').value)
    const dataCompra = document.getElementById('dataCompra').value
    const precoUnit = Number(document.getElementById('precoUnit').value)
    const desconto = Number(document.getElementById('desconto').value)
    const pagamento = document.getElementById('pagamento').value
    const status = document.getElementById('status').value
    const fk_idUsuario = Number(document.getElementById('fk_idUsuario').value)
    const fk_idProduto = Number(document.getElementById('fk_idProduto').value)

    const precoFinal = (Number((precoUnit * quantidade) - (desconto/100))).toFixed(2)

    const valores = {
        quantidade: quantidade,
        dataCompra: dataCompra,
        precoUnit: precoUnit,
        desconto: desconto,
        precoFinal: precoFinal,
        pagamento: pagamento,
        status: status,
        fk_idUsuario: fk_idUsuario,
        fk_idProduto: fk_idProduto
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/compra`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{

        res.innerHTML += `A quantidade é: ${dados.quantidade} <br>`
        res.innerHTML += `A data da compra é: ${dados.dataCompra} <br>`
        res.innerHTML += `O preço unitário é: ${dados.precoUnit} <br>`
        res.innerHTML += `O desconto é: ${dados.desconto} % <br>`
        res.innerHTML += `O preço final é: ${dados.precoFinal} <br>`
        res.innerHTML += `A forma pagamento é: ${dados.pagamento} <br>`
        res.innerHTML += `O status é: ${dados.status} <br>`
        res.innerHTML += `O código do usuário é: ${dados.fk_idUsuario} <br>`
        res.innerHTML += `O código do produto é: ${dados.fk_idProduto} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar a compra!',err)
    })
})

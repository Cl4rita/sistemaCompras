let res = document.getElementById('res')

let updEnt = document.getElementById('updEnt')

updEnt.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = Number(document.getElementById('id').value)
    const local = document.getElementById('local').value
    const responsavel = document.getElementById('responsavel').value

    const valores = {
        local: local,
        responsavel: responsavel
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/entrega/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        res.innerHTML += `O local é: ${dados.local} <br>`
        res.innerHTML += `O responsavel é: ${dados.responsavel} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao atualizar a entrega!',err)
    })
})
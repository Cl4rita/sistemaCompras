let res = document.getElementById('res')

let updFab = document.getElementById('updFab')

updFab.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = Number(document.getElementById('id').value)
    const nome = document.getElementById('nome').value

    const valores = {
        nome: nome
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/fabricante/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML += `O nome atualizado é: ${dados.nome} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao atualizar o fabricante!',err)
    })
})
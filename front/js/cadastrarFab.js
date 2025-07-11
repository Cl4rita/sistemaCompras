let res = document.getElementById('res')

let cadFab = document.getElementById('cadFab')

cadFab.addEventListener('click', (e)=>{
    e.preventDefault()
    const nome = document.getElementById('nome').value

    const valores = {
        nome: nome
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/fabricante`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        res.innerHTML += `O nome é: ${dados.nome} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o fabricante!',err)
    })
})
let res = document.getElementById('res')

let lisUs = document.getElementById('lisUs')

lisUs.addEventListener('click', ()=>{

    res.innerHTML = ''

    fetch(`http://localhost:3000/usuario`)
    .then(resp => resp.json())
    .then(dados =>{
        dados.forEach(dad => {
            res.innerHTML += `<hr>`
            res.innerHTML += `O código do usuário é: ${dad.idUsuario} <br>`
            res.innerHTML += `O nome é: ${dad.primeiroNome} <br>`
            res.innerHTML += `O sobrenome é: ${dad.sobrenome} <br>`
            res.innerHTML += `A idade é: ${dad.idade} <br>`
            res.innerHTML += `O email é: ${dad.email} <br>`
            res.innerHTML += `O telefone é: ${dad.telefone} <br>`
            res.innerHTML += `O endereço é: ${dad.endereco} <br>`
            res.innerHTML += `A cidade é: ${dad.cidade} <br>`
            res.innerHTML += `O estado é: ${dad.estado} <br>`
            res.innerHTML += `A data de nascimento é: ${dad.dataNasci} <br>`
            res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o usuário!',err)
    })
})
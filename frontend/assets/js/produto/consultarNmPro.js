let res = document.getElementById('res')

// let conUs = document.getElementById('conUs')

// conUs.addEventListener('click', ()=>{

//     const id = Number(document.getElementById('id').value)

//     res.innerHTML = ''

//     fetch(`http://localhost:3000/usuario/{id}`)
//     .then(resp => resp.json())
//     .then(dados =>{
//         dados.forEach(dad => {
//             res.innerHTML += `<hr>`
//             res.innerHTML += `O código do usuário é: ${dad.idUsuario} <br>`
//             res.innerHTML += `O nome é: ${dad.primeiroNome} <br>`
//             res.innerHTML += `O sobrenome é: ${dad.sobrenome} <br>`
//             res.innerHTML += `A idade é: ${dad.idade} <br>`
//             res.innerHTML += `O email é: ${dad.email} <br>`
//             res.innerHTML += `O telefone é: ${dad.telefone} <br>`
//             res.innerHTML += `O endereço é: ${dad.endereco} <br>`
//             res.innerHTML += `A cidade é: ${dad.cidade} <br>`
//             res.innerHTML += `O estado é: ${dad.estado} <br>`
//             res.innerHTML += `A data de nascimento é: ${dad.dataNasci} <br>`
//             res.innerHTML += `<hr>`
//         })
//     })
//     .catch((err)=>{
//         console.error('Erro ao consultar o usuário!',err)
//     })
// })
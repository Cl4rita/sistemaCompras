let res = document.getElementById('res')

let cadUs = document.getElementById('cadUs')

cadUs.addEventListener('click', (e)=>{
    e.preventDefault()
    
    const primeiroNome = document.getElementById('primeiroNome').value
    const sobrenome = document.getElementById('sobrenome').value
    const idade = Number(document.getElementById('idade').value)
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value
    const dataNasci = document.getElementById('dataNasci').value

    const valores = {
        primeiroNome: dados.users.firstName,
        sobrenome: dados.users.firstName,
        idade: dados.users.firstName,
        email: dados.users.firstName,
        telefone: dados.users.firstName,
        endereco: dados.users.firstName,
        cidade: dados.users.firstName,
        estado: dados.users.firstName,
        dataNasci: dados.users.firstName,
    }
    res.innerHTML = ''

    fetch(`https://dummyjson.com/users`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        res.innerHTML += `O nome é: ${dados.primeiroNome} <br>`
        res.innerHTML += `O sobrenome é: ${dados.sobrenome} <br>`
        res.innerHTML += `A idade é: ${dados.idade} <br>`
        res.innerHTML += `O email é: ${dados.email} <br>`
        res.innerHTML += `O telefone é: ${dados.telefone} <br>`
        res.innerHTML += `O endereço é: ${dados.endereco} <br>`
        res.innerHTML += `A cidade é: ${dados.cidade} <br>`
        res.innerHTML += `O estado é: ${dados.estado} <br>`
        res.innerHTML += `A data de nascimento é: ${dados.dataNasci} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o o usuário!',err)
    })
})
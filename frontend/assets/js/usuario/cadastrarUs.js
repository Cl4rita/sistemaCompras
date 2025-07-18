let res = document.getElementById('res')
let resLote = document.getElementById('resLote')

let cadUs = document.getElementById('cadUs')
let loteUs = document.getElementById('loteUs')

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

    const valor = {
        primeiroNome: primeiroNome,
        sobrenome: sobrenome,
        idade: idade,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        dataNasci: dataNasci
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/usuario`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valor)
    })
    .then(resp => resp.json())
    .then(dados => {
        
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
        console.error('Erro ao cadastrar o usuário!',err)
    })
})

loteUs.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch(`https://dummyjson.com/users`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(dados =>{

        dados.users.forEach(dad => {
            const valores = {
                primeiroNome: dad.firstName,
                sobrenome: dad.lastName,
                idade: dad.age,
                email: dad.email,
                telefone: dad.phone,
                endereco: dad.address.address,
                cidade: dad.address.city,
                estado: dad.address.state,
                dataNasci: dad.birthDate
            }
            console.log(valores)
            // resLote.innerHTML = ''

            fetch(`http://localhost:3000/usuario`,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(valores)
            })
            .then(resp => resp.body)
            .then(()=> {
                resLote.innerHTML = `Lote registrado com sucesso!`
            })
            .catch((err)=>{
                console.error('Erro ao cadastrar o usuário!',err)
            })
        })
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o usuário!',err)
    })
})
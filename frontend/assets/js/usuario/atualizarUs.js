let res = document.getElementById('res')

let updUs = document.getElementById('updUs')

updUs.addEventListener('click', (e)=>{
    e.preventDefault()

    let id = Number(document.getElementById('id').value)
    
    let primeiroNome = document.getElementById('primeiroNome').value
    let sobrenome = document.getElementById('sobrenome').value
    let idade = Number(document.getElementById('idade').value)
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let endereco = document.getElementById('endereco').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let dataNasci = document.getElementById('dataNasci').value

    const valores = {
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

    fetch(`http://localhost:3000/usuario/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{

        console.log(dados)
        res.innerHTML += `O código do usuário é: ${dados.idUsuario} <br>`
        res.innerHTML += `O nome atualizado é: ${dados.primeiroNome} <br>`
        res.innerHTML += `O sobrenome atualizado é: ${dados.sobrenome} <br>`
        res.innerHTML += `A idade atualizada é: ${dados.idade} <br>`
        res.innerHTML += `O email atualizado é: ${dados.email} <br>`
        res.innerHTML += `O telefone atualizado é: ${dados.telefone} <br>`
        res.innerHTML += `O endereço atualizado é: ${dados.endereco} <br>`
        res.innerHTML += `A cidade atualizada é: ${dados.cidade} <br>`
        res.innerHTML += `O estado atualizado é: ${dados.estado} <br>`
        res.innerHTML += `A data de nascimento atualizada é: ${dados.dataNasci} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao atualizar o usuário!',err)
    })
})
let res = document.getElementById('res')
let consultaNome = document.getElementById('consultaNome')

consultaNome.addEventListener("click", (e) => {
    e.preventDefault()

    let nome = document.getElementById('nome').value

    fetch(`http://localhost:3000/usuario`)
    .then(resp => resp.json())
    .then(dados => {
        const usuario = dados.find(dad => dad.primeiroNome.toLowerCase() === nome.toLowerCase()); 
        if (usuario) {
            res.innerHTML = `Nome: ${usuario.primeiroNome} ${usuario.sobrenome}<br>
            Idade: ${usuario.idade}<br>
            Email: ${usuario.email}<br>
            Telefone: ${usuario.telefone}<br>
            Endereço: ${usuario.endereco}<br>
            Cidade: ${usuario.cidade}<br>
            Estado: ${usuario.estado}<br>
            Data de Nascimento: ${usuario.dataNasci}<hr>`
        } else {
            res.innerHTML = 'Nome não encontrado, tente novamente!';
        }
    })
    .catch((err)=>{
        console.error('Erro ao consultar o nome do usuário', err)
    })
})
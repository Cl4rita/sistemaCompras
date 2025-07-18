let res = document.getElementById("res")
let procuraId = document.getElementById("procuraId")

procuraId.addEventListener("click", (e) => {
    e.preventDefault()

    let id = Number(document.getElementById("id").value)

    fetch(`http://localhost:3000/usuario/${id}`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        if (dados) {
            res.innerHTML = `Nome: ${dados.primeiroNome} ${dados.sobrenome}<br>
            Idade: ${dados.idade}<br>
            Email: ${dados.email}<br>
            Telefone: ${dados.telefone}<br>
            Endereço: ${dados.endereco}<br>
            Cidade: ${dados.cidade}<br>
            Estado: ${dados.estado}<br>
            Data de Nascimento: ${dados.dataNasci}<hr>`
        } else {
            res.innerHTML = "Id inválido, tente novamente.";
        }
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})
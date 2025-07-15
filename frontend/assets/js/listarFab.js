let res = document.getElementById('res')

let lisFab = document.getElementById('lisFab')

lisFab.addEventListener('click', ()=>{

    res.innerHTML = ''

    fetch(`http://localhost:3000/fabricante`)
    .then(resp => resp.json())
    .then(dados =>{
        dados.forEach(dad => {
            res.innerHTML += `O Código é: ${dad.codFabricante} <br>`
            res.innerHTML += `O nome é: ${dad.nome} <br>`
            res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o fabricante!',err)
    })
})
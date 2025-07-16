let res = document.getElementById('res')

let lisEnt = document.getElementById('lisEnt')

lisEnt.addEventListener('click', ()=>{

    res.innerHTML = ''

    fetch(`http://localhost:3000/entrega`)
    .then(resp => resp.json())
    .then(dados =>{
        dados.forEach(dad => {
            res.innerHTML += `O Código é: ${dad.codEntrega} <br>`
            res.innerHTML += `O local é: ${dad.local} <br>`
            res.innerHTML += `O responsável é: ${dad.responsavel} <br>`
            res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o entrega!',err)
    })
})
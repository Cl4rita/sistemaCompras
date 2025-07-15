let res = document.getElementById('res')

let delEnt = document.getElementById('delEnt')

delEnt.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = Number(document.getElementById('id').value)

    res.innerHTML = ''

    fetch(`http://localhost:3000/entrega/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp =>{
        if(resp.status === 204){
            res.innerHTML += `Os dados foram excluídos com sucesso!`
        }else{
            res.innerHTML += `Entrega não encontrado!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar a entrega!',err)
    })
})
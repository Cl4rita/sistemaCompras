let res = document.getElementById('res')

let delUs = document.getElementById('delUs')

delUs.addEventListener('click', (e)=>{
    e.preventDefault()
    
    const id = Number(document.getElementById('id').value)

    res.innerHTML = ''

    fetch(`http://localhost:3000/usuario/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp =>{
        if(resp.status === 204){
            res.innerHTML += `Os dados foram excluídos com sucesso!`
        }else{
            res.innerHTML += `Usuário não encontrado!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar o usuário!',err)
    })
})
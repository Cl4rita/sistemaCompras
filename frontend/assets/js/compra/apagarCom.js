let res = document.getElementById('res')

let delCom = document.getElementById('delCom')

delCom.addEventListener('click', (e)=>{
    e.preventDefault()

    const id = Number(document.getElementById('id').value)

    res.innerHTML = ''

    fetch(`http://localhost:3000/compra/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp =>{
        if(resp.status === 204){
            res.innerHTML += `Os dados foram excluídos com sucesso!`
        }else{
            res.innerHTML += `Compra não encontrada!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar a compra!',err)
    })
})
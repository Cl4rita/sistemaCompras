let res = document.getElementById('res')

let delPro = document.getElementById('delPro')

delPro.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = Number(document.getElementById('id').value)

    res.innerHTML = ''

    fetch(`http://localhost:3000/produto/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp =>{
        if(resp.status === 204){
            res.innerHTML += `Os dados foram excluídos com sucesso!`
        }else{
            res.innerHTML += `Produto não encontrado!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar o produto!',err)
    })
})
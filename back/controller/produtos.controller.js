const Produtos = require('../model/Produtos')

const cadastrar = async (req,res) => {
    const valores = req.body
    try{
        const dados = await Produtos.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar o produto', err)
        res.status(500).json({message: 'Erro ao cadastrar o produto'})
    }
}
const listar = async (req,res) => {
    try{
        const dados = await Produtos.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar o produto', err)
        res.status(500).json({message: 'Erro ao listar o produto'})
    }
}
const atualizar = async (req,res) => {
    const valores = req.body
    const id = req.params.id
    try{
        let dados = await Produtos.findByPk(id)
        if(dados){
            dados = await Produtos.findByPk(id)
            await Produtos.update(valores, {where: {idProduto: id}})
            res.status(200).json(dados)
        }else{
            res.status(404).json({message: 'O produto não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao atualizar o produto', err)
        res.status(500).json({message: 'Erro ao atualizar o produto'})
    }
}
const apagar = async (req,res) => {
    const id = req.params.id
    try{
        let dados = await Produtos.findByPk(id)
        if(dados){
            await Produtos.destroy({where: {idProduto: id}})
            res.status(200).json({message: 'Dados excluídos incrivelmente'})
        }else{
            res.status(404).json({message: 'O produto não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao apagar o produto', err)
        res.status(500).json({message: 'Erro ao apagar o produto'})
    }
}

// const consultarNome = async (req,res) => {
    
// }
// const consultarId = async (req,res) => {

// }

module.exports = { cadastrar, listar, atualizar, apagar }
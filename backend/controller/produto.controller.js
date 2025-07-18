const Produto = require('../model/Produto')

const cadastrar = async (req,res) => {
    const valores = req.body
    try{
        const dados = await Produto.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar o produto', err)
        res.status(500).json({message: 'Erro ao cadastrar o produto'})
    }
}
const listar = async (req,res) => {
    try{
        const dados = await Produto.findAll()
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
        let dados = await Produto.findByPk(id)
        if(dados){
            await Produto.update(valores, {where: {idProduto: id}})
            dados = await Produto.findByPk(id)
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
        let dados = await Produto.findByPk(id)
        if(dados){
            await Produto.destroy({where: {idProduto: id}})
            res.status(204).json({message: 'Dados excluídos incrivelmente'})
        }else{
            res.status(404).json({message: 'O produto não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao apagar o produto', err)
        res.status(500).json({message: 'Erro ao apagar o produto'})
    }
}
const consultarNome = async (req,res) => {
    const nome = req.params.nome
    try{
        const dados = await Usuarios.findOne({ 
            where: { titulo: nome }
        })
        if(dados){
            res.status(200).json(dados)
        }else{
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }catch(err){
        console.error('Erro ao consultar usuário por nome:', err)
        res.status(500).json({ message: 'Erro ao buscar usuário' })
    }
}

module.exports = { cadastrar, listar, atualizar, apagar, consultarNome }
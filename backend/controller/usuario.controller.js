const Usuario = require('../model/Usuario')

const cadastrar = async (req,res) => {
    const valores = req.body
    try{
        const dados = await Usuario.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar o usuário', err)
        res.status(500).json({message: 'Erro ao cadastrar o usuário'})
    }
}
const listar = async (req,res) => {
    try{
        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar o usuário', err)
        res.status(500).json({message: 'Erro ao listar o usuário'})
    }
}
const atualizar = async (req,res) => {
    const valores = req.body
    const id = req.params.id
    try{
        let dados = await Usuario.findByPk(id)
        if(dados){
            dados = await Usuario.findByPk(id)
            await Usuario.update(valores, {where: {idUsuario: id}})
            res.status(200).json(dados)
        }else{
            res.status(404).json({message: 'O usuário não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao atualizar o usuário', err)
        res.status(500).json({message: 'Erro ao atualizar o usuário'})
    }
}
const apagar = async (req,res) => {
    const id = req.params.id
    try{
        const dados = await Usuario.findByPk(id)
        if(dados){
            await Usuario.destroy({where: {idUsuario: id}})
            res.status(200).json({message: 'Dados excluídos incrivelmente'})
        }else{
            res.status(404).json({message: 'O usuário não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao apagar o usuário', err)
        res.status(500).json({message: 'Erro ao apagar o usuário'})
    }
}
const consultarId = async (req,res) => {
    const id = req.params.id
    try{
        const dados = await Usuario.findByPk(id)
        if(dados){
            res.status(200).json(dados)
        }else{
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }catch(err){
        console.error('Erro ao consultar usuário por ID:', err)
        res.status(500).json({ message: 'Erro ao buscar usuário' })
    }
}

module.exports = { cadastrar, listar, atualizar, apagar, consultarId }
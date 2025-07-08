const Compras = require('../model/Compras')

const cadastrar = async (req,res) => {
    const valores = req.body
    try{
        const dados = await Compras.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar a compra', err)
        res.status(500).json({message: 'Erro ao cadastrar a compra'})
    }
}
const listar = async (req,res) => {
    try{
        const dados = await Compras.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar a compra', err)
        res.status(500).json({message: 'Erro ao listar a compra'})
    }
}
const atualizar = async (req,res) => {
    const valores = req.body
    const id = req.params.id
    try{
        let dados = await Compras.findByPk(id)
        if(dados){
            dados = await Compras.findByPk(id)
            await Compras.update(valores, {where: {idCompra: id}})
            res.status(200).json(dados)
        }else{
            res.status(404).json({message: 'a compra não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao atualizar a compra', err)
        res.status(500).json({message: 'Erro ao atualizar a compra'})
    }
}
const apagar = async (req,res) => {
    const id = req.params.id
    try{
        let dados = await Compras.findByPk(id)
        if(dados){
            await Compras.destroy({where: {idCompra: id}})
            res.status(200).json({message: 'Dados excluídos incrivelmente'})
        }else{
            res.status(404).json({message: 'a compra não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao apagar a compra', err)
        res.status(500).json({message: 'Erro ao apagar a compra'})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }
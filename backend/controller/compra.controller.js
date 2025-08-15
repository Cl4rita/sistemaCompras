const Compra = require('../model/Compra')
const Produto = require('../model/Produto')

const cadastrar = async (req,res) => {
    const valores = req.body
    console.log(valores)
    try{
        let produto = await Produto.findByPk(valores.fk_idProduto)
        if(produto === null){
            console.log(produto)
            req.status(404).json({message: 'Produto não encontrado'})
        }else{
            let precoUnit = produto.preco
            let desconto = produto.porcentagemDesconto
            let estoqueNovo = produto.estoque
            let quantidade = valores.quantidade
            let precoSemDesc = 0
            let precoFinal = 0

            if(valores.quantidade > produto.estoque){
    
                //http status 422 indica que a requisição nãao pode ser processada por regra de negócio
                res.status(422).json({message: 'Quantidade insuficiente de produto'})
    
            }else{
                estoqueNovo = estoqueNovo - quantidade
                precoSemDesc = (quantidade * precoUnit)
                precoFinal = precoSemDesc - ((precoSemDesc * desconto / 100))
                
                const prodAtual = {
                    titulo : produto.titulo,
                    descricao: produto.descricao,
                    categoria: produto.categoria,
                    preco: produto.preco,
                    porcentagemDesconto: produto.porcentagemDesconto,
                    estoque: estoqueNovo,
                    marca: produto.marca,
                    imagem: produto.imagem
                }
                
                await Produto.update(prodAtual, {where: {idProduto: produto.idProduto}})

                const compraFinal = {
                    quantidade: valores.quantidade,
                    dataCompra: valores.dataCompra,
                    precoUnit: produto.preco,
                    desconto: produto.porcentagemDesconto,
                    precoFinal: precoFinal,
                    pagamento: valores.pagamento,
                    status: 'Vendido',
                    fk_idProduto: valores.fk_idProduto,
                    fk_idUsuario: valores.fk_idUsuario
                }

                const dados = await Compra.create(compraFinal)
                res.status(201).json(dados)
            }
        }


    }catch(err){
        console.error('Erro ao cadastrar a compra', err)
        res.status(500).json({message: 'Erro ao cadastrar a compra'})
    }
}
const listar = async (req,res) => {
    try{
        const dados = await Compra.findAll()
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
        let dados = await Compra.findByPk(id)
        if(dados){
            await Compra.update(valores, {where: {idCompra: id}})
            dados = await Compra.findByPk(id)
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
        let dados = await Compra.findByPk(id)
        if(dados){
            await Compra.destroy({where: {idCompra: id}})
            res.status(204).json({message: 'Dados excluídos incrivelmente'})
        }else{
            res.status(404).json({message: 'a compra não foi encontrado'})
        }
    }catch(err){
        console.error('Erro ao apagar a compra', err)
        res.status(500).json({message: 'Erro ao apagar a compra'})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }
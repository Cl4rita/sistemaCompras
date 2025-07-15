const conn = require('./db/conn')
const { Usuario, Produto, Compra } = require('./model/rel')

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log('As tabelas foram criadas e o Banco de Dados está sincronizado')
    }catch(err){
        console.error('Houve um erro ao criar as tabelas e sincronizar o Banco de Dados',err)
    }finally{
        await conn.close()
        console.log('Banco de Dados encerrado momentaneamente')
    }
}

syncDataBase()
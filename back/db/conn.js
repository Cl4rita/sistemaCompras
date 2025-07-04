const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.PORT
})

sequelize.authenticate()
.then(()=> {
    console.log('Conectado com o Banco de Dados')
})
.catch((err)=> {
    console.error('Erro ao conectar com o Bando de Dados', err)
})

module.exports = sequelize

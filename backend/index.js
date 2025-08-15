const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const conn = require('./db/conn')

const PORT = process.env.PORT
const hostname = process.env.DB_HOST

const produtoController = require('./controller/produto.controller')
const usuarioController = require('./controller/usuario.controller')
const compraController = require('./controller/compra.controller')

//                                  Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//-----------------------------------------------------------------------------
app.post('/produto', produtoController.cadastrar)
app.get('/produto', produtoController.listar)
app.put('/produto/:id', produtoController.atualizar)
app.delete('/produto/:id', produtoController.apagar)
app.get('/produto/:id', produtoController.consultarId)
app.get('/produto/:nome', produtoController.consultarNome)

app.post('/usuario', usuarioController.cadastrar)
app.get('/usuario', usuarioController.listar)
app.put('/usuario/:id', usuarioController.atualizar)
app.delete('/usuario/:id', usuarioController.apagar)
app.get('/usuario/:id', usuarioController.consultarId)
app.get('/usuario/:nome', usuarioController.consultarNome)

app.post('/compra', compraController.cadastrar)
app.get('/compra', compraController.listar)
app.put('/compra/:id', compraController.atualizar)
app.delete('/compra/:id', compraController.apagar)

app.get('/', (req, res)=> {
    res.status(200).json({message: 'Aplicação rodando'})
})
//-----------------------------------------------------------------------------
conn.sync()
.then(()=> {
    app.listen(PORT, hostname, ()=> {
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=> {
    console.error('Erro de conexão com o BD', err)
})
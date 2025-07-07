const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')

const PORT = process.env.PORT
const hostname = process.env.DB_HOST

const conn = require('./db/conn')

const produtosController = require('./controller/produtos.controller')
const usuariosController = require('./controller/usuarios.controller')
const comprasController = require('./controller/compras.controller')

//                                  Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//-----------------------------------------------------------------------------
app.post('/products', produtosController.cadastrar)
app.get('/products', produtosController.listar)
app.put('/products/:id', produtosController.atualizar)
app.delete('/products/:id', produtosController.apagar)
app.get('/usuario/nome/:nome', usuariosController.consultarNome)
app.get('/usuario/:id', usuariosController.consultarId)

app.post('/users', usuariosController.cadastrar)
app.get('/users', usuariosController.listar)
app.put('/users/:id', usuariosController.atualizar)
app.delete('/users/:id', usuariosController.apagar)

app.post('/compras', comprasController.cadastrar)
app.get('/compras', comprasController.listar)
app.put('/compras/:id', comprasController.atualizar)
app.delete('/compras/:id', comprasController.apagar)

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
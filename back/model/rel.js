const Users = require('./Usuarios') 
const Products = require('./Produtos') 
const Compras = require('./Compras') 

Users.hasMany(Compras, {
    foreignKey: 'fk_idProduto',
    as: 'compraUser',
    onDelete: 'CASCADE'
})
Compras.belongsTo(Users, {
    foreignKey: 'fk_idProduto',
    as: 'userComp',
    allowNull: false
})
Products.hasMany(Compras, {
    foreignKey: 'fk_idProduto',
    as: 'compraPro',
    onDelete: 'CASCADE'
})
Compras.belongsTo(Products, {
    foreignKey: 'fk_idProduto',
    as: 'proComp',
    allowNull: false
})

module.exports = { Users, Products, Compras }
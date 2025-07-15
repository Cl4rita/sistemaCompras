const Usuario = require('./Usuario') 
const Produto = require('./Produto') 
const Compra = require('./Compra') 

Usuario.hasMany(Compra, {
    foreignKey: 'fk_idProduto',
    as: 'compraUser',
    onDelete: 'CASCADE'
})
Compra.belongsTo(Usuario, {
    foreignKey: 'fk_idProduto',
    as: 'userComp',
    allowNull: false
})
Produto.hasMany(Compra, {
    foreignKey: 'fk_idProduto',
    as: 'compraPro',
    onDelete: 'CASCADE'
})
Compra.belongsTo(Produto, {
    foreignKey: 'fk_idProduto',
    as: 'proComp',
    allowNull: false
})

module.exports = { Usuario, Produto, Compra }
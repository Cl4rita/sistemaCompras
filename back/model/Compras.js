const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Compras = db.define('/compras', {
    idCompra:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataCompra:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    precoUnit:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    desconto:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    precoFinal:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pagamento:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    fk_idUsuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'idUsuario'
        }
    },
    fk_idProduto:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'idProduto'
        }
    },
},{
    timestamps: false,
    tableName: 'compras'
})

module.exports = Compras
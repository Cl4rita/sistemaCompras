const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Compras = db.define('/compras', {
    idCompra:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    purchaseDate:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    discountPercentage:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    finalPrice:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    payment:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    purchaseStatus:{
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
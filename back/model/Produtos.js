const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Produtos = db.define('/produtos', {
    idProdutos:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    category:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    discountPercentage:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    stock:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    brand:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Produtos
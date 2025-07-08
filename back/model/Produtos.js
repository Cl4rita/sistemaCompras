const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Products = db.define('/products', {
    idProduto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    categoria:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    porcentagemDisconto:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estoque:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    marca:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    imagem:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Products
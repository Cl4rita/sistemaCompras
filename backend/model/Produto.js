const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Produto = db.define('/produto', {
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
        allowNull: true
    },
    categoria:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    preco:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    porcentagemDesconto:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    estoque:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    imagem:{
        type: DataTypes.STRING(500),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Produto
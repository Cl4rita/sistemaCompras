const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Users = db.define('/users', {
    idUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    primeiroNome:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    sobrenome:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    idade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    telefone:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    endereco:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cidade:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estado:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dataNasci:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'usuarios'
})

module.exports = Users
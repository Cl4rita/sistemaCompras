const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Users = db.define('/users', {
    idUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    city:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    state:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    birthDate:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'usuarios'
})

module.exports = Users
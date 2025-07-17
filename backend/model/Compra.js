const { DataTypes } = require('sequelize')
const db =  require('../db/conn')

const Compra = db.define('/compra', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataCompra:{
        type: DataTypes.DATE,
        allowNull: false
    },
    precoUnit:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    desconto:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    precoFinal:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
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
            key: 'id'
        }
    },
    fk_idProduto:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'id'
        }
    },
},{
    timestamps: false,
    tableName: 'compras'
})

module.exports = Compra
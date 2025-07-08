const { sequelize, DataTypes } = require('../db/connect');
const { Usuario } = require('./Usuario');

const Tarefa = sequelize.define('Tarefa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA'),
        allowNull: false
    }
}, {
    tableName: 'Tarefa',
})

Usuario.hasMany(Tarefa, {
    foreignKey: 'id_usuario',
})
Tarefa.belongsTo(Usuario, {
    foreignKey: 'id_usuario'
})

module.exports = {
    Tarefa
}
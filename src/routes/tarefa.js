const { route } = require('./index')
const { TarefaController } = require('../controllers/TarefaController')

route.get('/tarefas', TarefaController.listarTarefas)
route.get('/tarefa/:id', TarefaController.buscarTarefaPorId)
route.post('/tarefa', TarefaController.criarTarefa)
route.put('/tarefa/:id', TarefaController.editarTarefa)
route.delete('/tarefa/:id', TarefaController.deletarTarefa)

module.exports = {
    route
} 
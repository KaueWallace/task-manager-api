const { Tarefa } = require("../models/Tarefa")
const { Usuario } = require("../models/Usuario")

class TarefaController {
    static async listarTarefas(req, res){
        try {
            const tarefas = await Tarefa.findAll()
            res.status(200).json(tarefas)
        } catch(error){
            res.status(500).json({ message: 'Erro ao listar tarefas!' })
        }
    }

    static async buscarTarefaPorId(req, res){
        try {
            const id = req.params.id
            const tarefa = await Tarefa.findByPk(id)
            res.status(200).json(tarefa)
        } catch (error) {
            res.status(500).json({ messagem: 'Erro ao buscar tarefa por id!'})
        }
    }

    static async criarTarefa(req, res){
        try {
            const dadosNovaTarefa = req.body
            const novaTarefa = await Tarefa.create(dadosNovaTarefa)
            res.status(201).json({ messagem: 'Tarefa criada com sucesso!', tarefa: novaTarefa })
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar tarefa!' })
        }
    }

    static async editarTarefa(req, res){
        try {
            const id = req.params.id
            const dadosTarefaAtualizada = req.body
            await Tarefa.update(dadosTarefaAtualizada, {
                where: { id }
            })
            res.status(200).json({ message: 'Tarefa atualizada com sucesso!' })

        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar tarefa!' })
        }
    }

    static async deletarTarefa(req, res){
        try {
            const id = req.params.id
            await Tarefa.destroy({
                where: { id }
            })
            res.status(200).json({ messagem: 'Tarefa deletada com sucesso!'})
        } catch (error) {
            res.status(500).json({ messagem: 'Erro ao deletar tarefa!'})
        }
    }
}

module.exports = {
    TarefaController
}
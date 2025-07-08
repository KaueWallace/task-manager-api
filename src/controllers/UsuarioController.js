const { Tarefa } = require('../models/Tarefa')
const { Usuario } = require('../models/Usuario')
const { ListagemService } = require('../services/listagemService')

class UsuarioController {
    static async listarUsuarios(req, res) {
        try {
            const usuarios = await ListagemService.listagemComPaginacao(
                Usuario, 
                'usuarios',
                ['nome', 'email'], 
                req.query
            )
            res.status(200).json(usuarios)
        } catch(error){
            console.error(error)
            res.status(500).json({ message: 'Erro ao listar usuários!' })
        }
    }

    static async listarUsuariosComTarefas(req, res){
        try {
            const usuarios = await ListagemService.listagemComPaginacao(
                Usuario, 
                'usuarios',
                ['nome', 'email'], 
                req.query,
                Tarefa
            )
            res.status(200).json(usuarios)
        } catch(error){
            res.status(500).json({ message: 'Erro ao listar usuários com tarefas!' })
        }
    }

    static async buscarUsuarioPorId(req, res) {
        try {
            const id = req.params.id
            const usuario = await Usuario.findByPk(id)
            res.status(200).json(usuario)
        } catch(error){
            res.status(500).json({ message: 'Erro ao buscar usuario por id!' })
        }
    }

    static async criarUsuario(req, res){
        try {
            const dadosNovoUsuario = req.body
            const novoUsuario = await Usuario.create(dadosNovoUsuario)
            res.status(201).json({ messagem: 'Usuário criado com sucesso!', usuario: novoUsuario })
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar usuário!' })
        }
    }

    static async editarUsuario(req, res){
        try {
            const dadosUsuarioAtualizado = req.body
            const id = req.params.id
            await Usuario.update(dadosUsuarioAtualizado, {
                where: { id }
            })
            res.status(200).json({ messagem: 'Usuário atualizado com sucesso!'})
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar usuário!' })
        }
    }

    static async deletarUsuario(req, res){
        try {
            const id = req.params.id
            await Usuario.destroy({
                where: { id }
            })
            res.status(200).json({ messagem: 'Usuário deletado com sucesso!'})
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar usuário!' })
        }
    }


}

module.exports = {
    UsuarioController
}
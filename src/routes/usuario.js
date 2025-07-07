const { route } = require('./index')
const { UsuarioController } = require('../controllers/UsuarioController')

route.get('/usuarios', UsuarioController.listarUsuarios)
route.get('/usuario/:id', UsuarioController.buscarUsuarioPorId)
route.post('/usuario', UsuarioController.criarUsuario)
route.put('/usuario/:id', UsuarioController.editarUsuario)
route.delete('/usuario/:id', UsuarioController.deletarUsuario)


module.exports = {
    route
}
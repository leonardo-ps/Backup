const { Router } = require('express')
const EnderecoController = require('../controllers/EnderecoController')

const router = Router()

router.post('/endereco', EnderecoController.criaEndereco)
router.post('/endereco/:fkCliente/usuario', EnderecoController.criaUsuario)
router.post('/endereco/:fkCep/cliente', EnderecoController.criaCliente)
router.get('/cliente/:cnpj', EnderecoController.selectCliente)
router.get('/usuario/:email/:senha', EnderecoController.selectUsuario)
router.get('/endereco/todosEnderecos', EnderecoController.selectEndereco)

module.exports = router
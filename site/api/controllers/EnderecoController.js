const database = require('../models')

class EnderecoController {
    static async criaEndereco(req, res) {
        const novoEndereco = req.body
        try {
            const novoEnderecoCriado = await database.Endereco.create(novoEndereco)
            return res.status(200).json(novoEnderecoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async criaUsuario(req, res) {
        const { fkCliente } = req.params
        const novoUsuario = {
            ...req.body,
            fkCliente: fkCliente
        }
        try {
            const novoUsuarioCriado = await database.Usuario.create(novoUsuario)
            return res.status(200).json(novoUsuarioCriado)
        } catch {
            return res.status(500).json(error.message)
        }
    }

    static async criaCliente(req, res) {
        const {
            fkCep
        } = req.params
        const novoCliente = {
            ...req.body,
            fkCep: fkCep
        }
        try {
            const novoClienteCriado = await database.Cliente.create(novoCliente)
            return res.status(200).json(novoClienteCriado)
        } catch {
            return res.status(500).json(error.message)
        }
    }

    static async selectEndereco(req,res){
        try{
            const todosEnderecos = await database.Endereco.findAll()
            return res.status(200).json(todosEnderecos)
        }catch (erro){
            return res.status(500).json(erro.message)
        }
    }

    static async selectCliente(req, res) {
        const { cnpj } = req.params;
        try{
            const todosClientes = await database.Cliente.findOne({
                where: {cnpj: cnpj}
            });
            return res.status(200).json(todosClientes)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    static async selectUsuario(req, res) {
        const {
            email,
            senha
        } = req.params
        try {
            const usuario = await database.Usuario.findOne({
                where: {
                    email: email,
                    senha: senha
                }
            })
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = EnderecoController
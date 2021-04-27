const database = require('../models');

class MaquinaController {
    static async selectMaquinasPorFk(req, res) {
        const {
            fkCliente
        } = req.params
        try {
            const todasMaquinas = await database.Maquina.findAll({
                where: {
                    fkCliente: fkCliente
                }
            })
            return res.status(200).json(todasMaquinas)
        } catch (erro) {
            return res.status(200).json(erro.message)
        }
    }

    static async selectMaquinasPorHostName(req, res) {
        const {
            hostName
        } = req.params
        try {
            const maquinaEspecifica = await database.Maquina.findOne({
                where: {
                    hostName: hostName
                }
            })
            return res.status(200).json(maquinaEspecifica)
        } catch (erro) {
            return res.status(200).json(erro.message)
        }
    }

    static async selectLogMaisRecente(req, res) {
        const { hostName } = req.params
        try {
            const ultimoLog = await database.Log.findOne({
                where: {fkMaquina: hostName},
                order: [['momentoCaptura', 'DESC']]
            })
            return res.status(200).json(ultimoLog)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    static async selectLogs (req,res){
        const { hostName } = req.params
        try {
            const todosLog = await database.Log.findAll({
                where: {fkMaquina: hostName}
            })
            return res.status(200).json(todosLog)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }
}

module.exports = MaquinaController
const express = require('express')

module.exports = function (server) {

    //Definit url base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de ciclo de pagamento
    const BilliCycle = require('../api/billingCycle/billingCycleService')
    BilliCycle.register(router, '/billingCycles')
}


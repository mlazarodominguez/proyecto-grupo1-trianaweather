'use strict'

const express = require('express')
const router = express.Router()

const middleware = require('../middleware/index');
const estacionpController = require('../controllers/estacionp');






router.put('api/estacionp/:id', estacionpController.updateEstacion);
router.delete('api/estacionp/:id', estacionpController.deleteEstacion);
router.get('api/estacionp',estacionpController.getTodosToday)





module.exports = router
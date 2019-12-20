'use strict'

const express = require('express')
const router = express.Router()

const middleware = require('../middleware/index');
const EstacionController = require('../controllers/estacion')
const DatosController = require('../controllers/datos_meteorologicos')

router.get('/', EstacionController.getAll);
router.get('/:id', EstacionController.getById);
router.post('/', middleware.ensureAuthenticatedManager,EstacionController.nuevaEstacion);
router.put('/:id',middleware.ensureAuthenticatedManager, EstacionController.updateEstacion);
router.delete('/:id',middleware.ensureAuthenticatedManager, EstacionController.deleteEstacion);
router.get('/:id/weather/from/:from/to/:to', DatosController.datosPorFechaUnaEstacion)

router.get('/:id/weather', middleware.ensureAuthenticated, DatosController.getOne);

module.exports = router
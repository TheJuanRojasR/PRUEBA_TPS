const { Router } = require('express');
const router = Router(); //routes
const usuariosController = require('../controller/usuarioController');

router.post('/usuarios/ingresar', usuariosController.login);

module.exports = router;
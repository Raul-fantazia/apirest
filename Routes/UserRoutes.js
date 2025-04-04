const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/User.Controller');

// rotas

router.post('/', UserController.criarUsuario);
router.post('/login', UserController.loginUsuario);

module.exports = router;
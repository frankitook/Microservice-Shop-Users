const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/userController');
const autenticacion = require('../middlewares/auth');

router.get('/', ClienteController.obtenerUsuarios);
router.get('/:nroDni', ClienteController.obtenerUnUsuarioPorDNI); 
router.post('/registrarse', ClienteController.crearUsuario);
router.put('/:nroDni', ClienteController.actualizarUsuario);
router.delete('/:nroDni', ClienteController.eliminarUsuario);

module.exports = router;
const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/userController');
const autenticacion = require('../middlewares/auth');
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage });



router.get('/', ClienteController.obtenerUsuarios);
router.get('/:nroDni', ClienteController.obtenerUnUsuarioPorDNI); 
router.post('/registrarse',upload.single('foto') ,ClienteController.crearUsuario);
router.put('/:nroDni', ClienteController.actualizarUsuario);
router.delete('/:nroDni', ClienteController.eliminarUsuario);

module.exports = router;
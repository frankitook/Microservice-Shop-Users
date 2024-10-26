const jwt = require('jsonwebtoken');
const Cliente = require('../models/user');
require('dotenv').config(); 
const bcrypt = require('bcryptjs');

function generarTokenCliente(cliente) {
  return jwt.sign({ cliente }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

async function iniciarSesion(req, res) {
  const { email, contrasena } = req.body;

  try {
    const cliente = await Cliente.findOne({ where: { email, contrasena } });

    if (cliente) {
      
      if (cliente.estado === 'Suspendido') {
        return res.status(403).json({ message: 'No se puede iniciar sesión. Su cuenta fue suspendida.' });
      } else{

      
      const token = generarTokenCliente(cliente);
      res.json({ token, nroDni: cliente.nroDni });
    }
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { iniciarSesion, generarTokenCliente };
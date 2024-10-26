const jwt = require('jsonwebtoken');
const Cliente = require('../models/user');
require('dotenv').config(); 
const bcrypt = require('bcrypt');

function generarTokenCliente(cliente) {
  return jwt.sign({ cliente }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

async function iniciarSesion(req, res) {
  const { email, contrasena } = req.body;

  try {
    const cliente = await Cliente.findOne({ where: { email } });

    if (cliente) {
      
      if (cliente.estado === 'Suspendido') {
        return res.status(403).json({ message: 'No se puede iniciar sesión. Su cuenta fue suspendida.' });
      }

      
      const isPasswordValid = await bcrypt.compare(contrasena, cliente.contrasena);

      if (isPasswordValid) {
        const token = generarTokenCliente(cliente);
        return res.json({ token, nroDni: cliente.nroDni });
      } else {
        return res.status(401).json({ message: 'El usuario o la contraseña son incorrectas' });
      }
    } else {
      return res.status(401).json({ message: 'El usuario o la contraseña son incorrectas' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { iniciarSesion, generarTokenCliente };
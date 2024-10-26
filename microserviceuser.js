require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const base = require('./configuration/db');
const crypto = require('crypto');
const cors = require('cors');

const usuarioRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json({ limit: '5mb' }));  
app.use(express.urlencoded({ limit: '5mb', extended: true }));


app.use('/autenticacion', authRoutes);
app.use('/usuarios', usuarioRoutes);



const iniciar = async () => {
  try {
      await base.sync();
      app.listen(port, () => {
          console.log(`Servidor escuchando en http://localhost:${port}`);
      });
  } catch (error) {
      console.error('Error al iniciar el servidor:', error); 
  }
};

  
  iniciar();
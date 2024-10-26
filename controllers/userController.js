const Cliente = require('../models/user');

const obtenerUsuarios= async (req,res) => {
    
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los clientes' });
    };


}


const obtenerUnUsuarioPorDNI= async (req,res) => {
    
    const { nroDni} = req.params;

    try {

        const cliente = await Cliente.findOne({ where: { nroDni } });
        if(cliente){
            res.json(cliente);

        }else{

            res.status(404).json({ message: 'Cliente no encontrado' });
        }
        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener el cliente', error: error.message });
    };


}

const actualizarUsuario= async(req,res) =>{

    try {
        const { nroDni } = req.params;
        const nuevosDatos = req.body;
        const cliente = await Cliente.findOne({ where: { nroDni} });

        if (cliente) {
            await cliente.update(nuevosDatos);
            res.json({ message: 'Cliente actualizado correctamente' });
          } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
          }

    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente'});
    }


}

const eliminarUsuario= async (req,res) => {
    const { nroDni } = req.params;
    
    try {
        
        const cliente = await Cliente.findOne({ where: { nroDni} });

        if (cliente) {
            await cliente.destroy(); 
            res.json({ message: 'Cliente eliminado correctamente' });
          } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
          }


    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el cliente'});
    }

}



const crearUsuario = async (req, res) => {
  const { nroDni, tipoDni, nombre, apellido, direccion, telefono, email, contrasena, fechaNacimiento, estado, tipo } = req.body;

  const foto = req.file ? req.file.buffer : null;

  try {
    
    if (req.file && req.file.size > 5 * 1024 * 1024) { 
      return res.status(400).json({ message: 'La foto es muy grande, debe ser menor a 5 MB' });
    }

    const clienteExistente = await Cliente.findOne({ where: { nroDni } });

    if (clienteExistente) {
      return res.status(400).json({ message: 'El cliente ya existe' });
    }

    const nuevoCliente = await Cliente.create({
      nroDni,
      tipoDni,
      nombre,
      apellido,
      direccion,
      telefono,
      email,
      contrasena,
      fechaNacimiento,
      foto,
      estado,
      tipo
    });

    res.status(201).json({ message: 'Cliente creado correctamente.', cliente: nuevoCliente });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el cliente.', error: error.message });
  }
};
  

  

module.exports ={obtenerUsuarios,
                 obtenerUnUsuarioPorDNI,
                 actualizarUsuario,
                 eliminarUsuario,
                 crearUsuario}
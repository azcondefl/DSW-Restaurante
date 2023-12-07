const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://root:7u9dFolMy1SzmrUg@restaurante.e25vnsj.mongodb.net/restaurante-db?retryWrites=true&w=majority`
  )
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
  
module.exports = mongoose;

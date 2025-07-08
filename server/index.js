// 1. Importar Express
const express = require('express');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto
// Usamos el puerto 5000 para el backend. El frontend (React) usará por defecto el 3000.
// process.env.PORT es para cuando despleguemos el proyecto en un servicio de hosting.
const PORT = process.env.PORT || 5000;

// 4. Crear una ruta de prueba
// Cuando alguien visite la raíz de nuestro servidor (http://localhost:5000/),
// se ejecutará esta función.
app.get('/', (req, res) => {
  // req = request (petición), res = response (respuesta)
  res.send('¡Hola Mundo desde el servidor de mi CMS!');
});

// 5. Poner el servidor a escuchar peticiones
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
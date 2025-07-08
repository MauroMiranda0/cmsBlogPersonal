// server/index.js

const express = require('express');
// 1. Importar las rutas de posts
const postRoutes = require('./routes/posts.routes.js');

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middlewares
// Este middleware permite a Express entender y parsear JSON enviado en el body de las peticiones
app.use(express.json());

// 3. Usar las rutas
// Le decimos a nuestra app que use el router de posts para cualquier petición
// que comience con '/api/posts'
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
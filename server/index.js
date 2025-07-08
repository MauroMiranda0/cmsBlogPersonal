// server/index.js

const express = require('express');
const cors = require('cors'); // 1. Importar cors
const { connectDB, sequelize } = require('./database/database.js');
require('./models/Post.model.js');

const postRoutes = require('./routes/posts.routes.js');

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Usar el middleware de cors
// Esto debe ir ANTES de las rutas de la API
app.use(cors()); 

app.use(express.json());
app.use('/api/posts', postRoutes);

// 3. Función principal asíncrona para arrancar todo
async function main() {
    await connectDB(); // Conectar a la DB
    // Sincroniza los modelos con la base de datos.
    // { force: false } significa que no borrará las tablas si ya existen.
    // Usa { force: true } en desarrollo si necesitas recrear las tablas desde cero.
    await sequelize.sync({ force: false });

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}

main(); // 4. Ejecutar la función principal
// server/index.js

const express = require('express');
const { connectDB, sequelize } = require('./database/database.js'); // 1. Importar
require('./models/Post.model.js'); // 2. Importar el modelo para que se registre

const postRoutes = require('./routes/posts.routes.js');

const app = express();
const PORT = process.env.PORT || 5000;

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
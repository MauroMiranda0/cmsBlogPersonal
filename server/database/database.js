// server/database/database.js

const { Sequelize } = require('sequelize');

// 1. Crear una nueva instancia de Sequelize para la conexión
// El constructor recibe varios argumentos:
// - dialect: el tipo de base de datos que estamos usando.
// - storage: la ruta al archivo de la base de datos. SQLite guarda todo en un solo archivo.
//   'database.sqlite' significa que se creará un archivo con ese nombre en la raíz del proyecto (server/).
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// 2. Función asíncrona para autenticar la conexión
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

// 3. Exportar la instancia de sequelize y la función de conexión
module.exports = { sequelize, connectDB };
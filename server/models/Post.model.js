// server/models/Post.model.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database.js');

// Definimos el modelo 'Post'
const Post = sequelize.define('Post', {
    // Atributos del modelo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false // no puede ser nulo
    },
    content: {
        type: DataTypes.TEXT, // TEXT es para textos más largos que STRING
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true // permitimos que la imagen sea opcional
    }
}, {
    // Opciones adicionales del modelo
    timestamps: true // crea automáticamente los campos createdAt y updatedAt
});

module.exports = Post;
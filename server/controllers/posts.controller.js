// Cada función que exportemos será un controlador para una ruta específica

// server/controllers/posts.controller.js

const Post = require('../models/Post.model.js'); // 1. Importar el modelo

// Controlador para obtener todos los posts (GET /api/posts)
const getPosts = async (req, res) => {
    try {
        // 2. Usar el método findAll() de Sequelize
        // Esto se traduce a: SELECT * FROM "Posts";
        const posts = await Post.findAll();
        
        // 3. Enviar la respuesta
        res.status(200).json(posts);

    } catch (error) {
        // 4. Manejo de errores
        res.status(500).json({ message: "Error al obtener las publicaciones", error: error.message });
    }
};

// ... (después de la función getPosts)

// Controlador para crear un nuevo post (POST /api/posts)
const createPost = async (req, res) => {
    // 1. Obtener los datos del cuerpo de la petición
    const { title, content, imageUrl } = req.body;

    try {
        // 2. Validar que los datos necesarios están presentes
        if (!title || !content) {
            return res.status(400).json({ message: "El título y el contenido son obligatorios." });
        }

        // 3. Usar el método create() de Sequelize
        // Esto se traduce a: INSERT INTO "Posts" (title, content, imageUrl, ...) VALUES (...);
        const newPost = await Post.create({
            title,
            content,
            imageUrl // si imageUrl es undefined, no se incluirá, lo cual es correcto
        });

        // 4. Enviar la respuesta con el nuevo post creado
        res.status(201).json(newPost);

    } catch (error) {
        res.status(500).json({ message: "Error al crear la publicación", error: error.message });
    }
};

// ... (dentro de server/controllers/posts.controller.js)

// Controlador para obtener un post por ID (GET /api/posts/:id)
const getPostById = async (req, res) => {
    try {
        const { id } = req.params; // Obtenemos el ID de los parámetros de la URL
        const post = await Post.findByPk(id); // findByPk = Find by Primary Key

        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la publicación", error: error.message });
    }
};

// Controlador para actualizar un post (PUT /api/posts/:id)
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, imageUrl } = req.body;

        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }

        // Actualizar los campos del post
        post.title = title;
        post.content = content;
        post.imageUrl = imageUrl;
        
        await post.save(); // Guardar los cambios en la DB

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la publicación", error: error.message });
    }
};

// Controlador para eliminar un post (DELETE /api/posts/:id)
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }

        await post.destroy(); // Eliminar el registro de la DB

        res.status(204).send(); // 204 No Content, no se envía cuerpo de respuesta
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la publicación", error: error.message });
    }
};

// Actualiza tus exportaciones
module.exports = {
    getPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost
};
// Cada función que exportemos será un controlador para una ruta específica

// Controlador para obtener todos los posts
const getPosts = (req, res) => {
    // Por ahora, solo devolvemos datos de prueba (mock data)
    const mockPosts = [
        { id: 1, title: "Mi primer post", content: "¡Hola mundo desde la API!" },
        { id: 2, title: "Aprendiendo Node.js", content: "Express es genial para construir APIs." }
    ];

    res.status(200).json(mockPosts);
};

// Exportamos los controladores
module.exports = {
    getPosts
};
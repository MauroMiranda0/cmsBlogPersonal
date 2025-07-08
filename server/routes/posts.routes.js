// server/routes/posts.routes.js

const { Router } = require('express');
// 1. Importar el controlador
const { getPosts } = require('../controllers/posts.controller.js');

const router = Router();

// 2. Usar el controlador en la ruta
// Cuando llegue una petición GET a '/', se ejecutará la función getPosts
router.get('/', getPosts);

module.exports = router;
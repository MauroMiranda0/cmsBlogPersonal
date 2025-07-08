// server/routes/posts.routes.js
const { Router } = require('express');
const { getPosts, createPost, getPostById, updatePost, deletePost } = require('../controllers/posts.controller.js');

const router = Router();

router.get('/', getPosts);
router.post('/', createPost);

// Rutas que requieren un ID específico
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
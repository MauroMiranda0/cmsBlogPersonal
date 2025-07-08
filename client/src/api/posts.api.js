// client/src/api/posts.api.js
import axios from 'axios';

// 1. Crear una instancia de Axios con la URL base de nuestra API
const postsApi = axios.create({
    baseURL: 'http://localhost:5000/api/posts'
});

// 2. Definir la función que hará la petición GET
export const getAllPosts = async () => {
    const response = await postsApi.get('/');
    return response.data;
};
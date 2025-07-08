// client/src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/posts.api.js';

function HomePage() {
  // 1. Estado para almacenar la lista de posts
  const [posts, setPosts] = useState([]);

  // 2. useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error al cargar los posts:", error);
      }
    }
    loadPosts();
  }, []); // 3. El array vacío asegura que se ejecute solo una vez

  return (
    <div>
      <h2>Página de Inicio - Lista de Posts</h2>
      
      {/* 4. Renderizar la lista de posts */}
      <div>
        {posts.map(post => (
          <article key={post.id} style={{ border: '3px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
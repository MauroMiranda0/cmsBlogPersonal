// client/src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostFormPage from './pages/PostFormPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      {/* Menú de Navegación Básico */}
      <div>
        <h1>Mi Blog CMS</h1>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/add">Crear Post</Link>
      </nav>

      {/* Definición de Rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<PostFormPage />} />
        <Route path="/edit/:id" element={<PostFormPage />} /> {/* Ruta para editar */}
        <Route path="*" element={<NotFoundPage />} /> {/* Ruta para 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
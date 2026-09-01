import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import WorksPage from './pages/WorksPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

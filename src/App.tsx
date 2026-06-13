import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';

function HomePage() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navigation />

      <main>
        <Hero />
        <Curriculum />
        <CinematicVision />
        <AlumniArchives />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
    </Routes>
  );
}

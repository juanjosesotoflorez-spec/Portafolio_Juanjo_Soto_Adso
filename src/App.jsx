import { useState, useEffect } from 'react';

// Componentes
import Header from './componentes/Header';
import AboutMe from './componentes/AboutMe';
import SkillsSection from './componentes/SkillsSection';
import ProjectsSection from './componentes/ProjectsSection';
import RecommendationsSection from './componentes/RecommendationsSection';
import ContactForm from './componentes/ContactForm';
import ScrollToTop from './componentes/ScrollToTop';

// Recomendaciones iniciales por defecto
const INITIAL_RECOMMENDATIONS = [
  {
    text: "Juan demuestra un aprendizaje acelerado y un compromiso constante con la calidad de sus proyectos web y estructura de software.",
    author: "Instructor SENA",
    role: "Área ADSO"
  },
  {
    text: "Gran capacidad para resolver problemas en equipo, proponiendo soluciones eficientes tanto en lógica de programación como en bases de datos.",
    author: "Compañero de Proyecto",
    role: "Desarrollo Web"
  },
  {
    text: "Demuestra iniciativa constante para aprender nuevas tecnologías, refactorizar su código y adaptar interfaces con buena experiencia de usuario.",
    author: "Mentor Académico",
    role: "Área de Sistemas"
  }
];

function App() {
  // 1. Cargar desde localStorage si existe, o usar la lista inicial
  const [recommendations, setRecommendations] = useState(() => {
    const saved = localStorage.getItem('recommendations');
    return saved ? JSON.parse(saved) : INITIAL_RECOMMENDATIONS;
  });

  // 2. Guardar en localStorage cada vez que cambien las recomendaciones
  useEffect(() => {
    localStorage.setItem('recommendations', JSON.stringify(recommendations));
  }, [recommendations]);

  const handleAddRecommendation = (newRec) => {
    setRecommendations([...recommendations, newRec]);
  };

  return (
    <div className="bg-main text-white">
      <Header />
      <main>
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <RecommendationsSection recommendations={recommendations} />
        <ContactForm onAddRecommendation={handleAddRecommendation} />
      </main>
      <footer className="py-4 text-center border-top border-secondary">
        <p className="mb-0 text-muted">
          © 2026 <strong>Juan José Soto Flórez</strong> — Medellín, Colombia 🇨🇴
        </p>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
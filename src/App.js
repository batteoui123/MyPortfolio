import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Education from './components/Education';
import { useEffect, useState } from 'react';
import SpaceBackground from './assets/canvas/Bachan';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Fonction pour calculer la position du scroll
  const updateScrollPosition = () => {
    const position = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollPosition((position / scrollHeight) * 100);
  };

  // Afficher le bouton quand l'utilisateur est en bas de la page
  const toggleScrollButton = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('scroll', toggleScrollButton);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('scroll', toggleScrollButton);
    };
  }, []);







  return (
    <div className="App">
       {/* Barre de défilement */}
       <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${scrollPosition}%` }}></div>
      </div>
      {/* Fond animé "space" */}
      <SpaceBackground />

      {/* Contenu du portfolio */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <NavBar />
        <Banner />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
       {/* Bouton de retour en haut */}
       <button
        className={`scroll-to-top ${showScrollButton ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
}

export default App;

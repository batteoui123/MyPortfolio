
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

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Vérifier si le thème est sauvegardé dans localStorage
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    }, []);
  
    // Fonction pour basculer le mode sombre/clair
    const toggleTheme = () => {
      setIsDarkMode((prev) => !prev);
    };
  
    // Sauvegarder le thème choisi dans localStorage
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [isDarkMode]);


  return (
    <div className="App">
      <NavBar />   
       <Banner  />
      <Skills />
      <Education/>
      <Projects />
       <Contact />  
    
       <Footer />
    </div>
  );
}

export default App;

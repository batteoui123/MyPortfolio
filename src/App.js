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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

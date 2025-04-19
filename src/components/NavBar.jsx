import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
import logo from '../assets/img/Oussama.gif';


import { color, delay, motion } from 'framer-motion';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Border, BorderBottom } from "react-bootstrap-icons";
import { tr } from "framer-motion/m";

export const NavBar = () => {

  const [triggerAnimation, setTriggerAnimation] = useState(true);

  useEffect(() => {
    // Set interval to trigger animation every 3 minutes (180 seconds)
    const interval = setInterval(() => {
      setTriggerAnimation((prev) => !prev); // Toggle the animation trigger
    }, 9000); // 180000ms = 3 minutes

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  



  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <nav className={`navbar  navbar-expand-lg  ${scrolled ? "scrolled" : ""}`}>
        
      

        <div className="container bg-dange">
          <a className="navbar-brand"  href="/">
            {/* <img src={logo} alt="Logo" className="bg-danger"style={{width:'100px' ,background:'none'}} /> */}
            <span className="logo">
              <motion.span initial={triggerAnimation?{  opacity:0, x:'-19vw',y:'-10vw'  }:{}}  animate={triggerAnimation?{  opacity:1,x:0,y:0   }:{}}  transition={{ duration: 1, delay: 1.3 }} >O</motion.span>
              <motion.span initial={triggerAnimation?{  opacity:0  }:{}}  animate={triggerAnimation?{  opacity:1  }:{}}  transition={{ duration: 1, delay: 0 }} >u</motion.span>
              <motion.span initial={triggerAnimation?{  opacity:0  }:{}}  animate={triggerAnimation?{  opacity:1  }:{}}  transition={{ duration: 1, delay: 0.2}} >s</motion.span>
              <motion.span initial={triggerAnimation?{  opacity:0  }:{}}  animate={triggerAnimation?{  opacity:1  }:{}}  transition={{ duration: 1, delay: 0.4 }} >s</motion.span>
              <motion.span initial={triggerAnimation?{  opacity:0  }:{}}  animate={triggerAnimation?{  opacity:1  }:{}}  transition={{ duration: 1, delay: 0.6 }} >a</motion.span>
              <motion.span initial={triggerAnimation?{  opacity:0  }:{}}  animate={triggerAnimation?{  opacity:1  }:{}}  transition={{ duration: 1, delay: 0.8 }} >m</motion.span>
              <motion.span initial={triggerAnimation?{  opacity:0  }:{}}  animate={triggerAnimation?{  opacity:1  }:{}}  transition={{ duration: 1, delay: 1 }} >a</motion.span>
           
              </span>
          
            
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end"  id="navbarNav">
            <ul className="navbar-nav " style={{background:'bod'}}>

              <motion.li className="nav-item">   
                <motion.a
                 
                  href="#home"
                  className={`nav-link ${
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }`}
                  onClick={() => onUpdateActiveLink("home")}
                  style={{opacity:activeLink === "home"?0.7:5}}
                  
                  whileHover={{
                    background: "linear-gradient(90deg, #a84cf5, #36c0f0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    scale: 1.1,
                    opacity:5
                  }}
                  transition={{duration:0.1}}
                  
                    
                
                >
                  Aboute me
                </motion.a>
              </motion.li>

              <li className="nav-item">
                <motion.a
                  href="#skills"
                  className={`nav-link ${
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }`}
                  onClick={() => onUpdateActiveLink("skills")}
                  style={{opacity:activeLink === "skills"?0.7:5}}

                  whileHover={{
                    background: "linear-gradient(90deg, #a84cf5, #36c0f0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    scale: 1.1,
                    opacity:5
                  }}
                  transition={{duration:0.1}}
                >
                  Skills
                </motion.a>
              </li>
              
              <li className="nav-item">
                <motion.a
                  href="#education"
                  className={`nav-link ${
                    activeLink === "education"
                      ? "active navbar-link"
                      : "navbar-link"
                  }`}
                  onClick={() => onUpdateActiveLink("education")}
                  whileHover={{
                    background: "linear-gradient(90deg, #a84cf5, #36c0f0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    scale: 1.1,
                    opacity:5
                  }}
                  style={{opacity:activeLink === "education"?0.7:5}}
                  transition={{duration:0.1}}
                >
                  Education
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  href="#projects"
                  className={`nav-link ${
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }`}
                  onClick={() => onUpdateActiveLink("projects")}
                  style={{opacity:activeLink === "projects"?0.7:5}}
                  whileHover={{
                    background: "linear-gradient(90deg, #a84cf5, #36c0f0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    scale: 1.1,
                    opacity:5
                  }}
                  transition={{duration:0.1}}
                >
                  Projects
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  href="#contact"
                  className={`nav-link ${
                    activeLink === "contact"
                      ? "active navbar-link"
                      : "navbar-link"
                  }`}
                  onClick={() => onUpdateActiveLink("contact")}
                  style={{opacity:activeLink === "contact"?0.7:5}}
                  whileHover={{
                    background: "linear-gradient(90deg, #a84cf5, #36c0f0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    scale: 1.1,
                    opacity:5
                  }}

                  transition={{duration:0.1}}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
}

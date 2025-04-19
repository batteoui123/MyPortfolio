import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import cpp from "../assets/img/ProgrammingLang/cpp.svg";
import js from "../assets/img/ProgrammingLang/javascript.svg";
import php from "../assets/img/ProgrammingLang/php.svg";

import css from "../assets/img/ProgrammingLang/css3.svg";
import java from "../assets/img/ProgrammingLang/java.svg";
import html from "../assets/img/ProgrammingLang/html5.svg";
import c from "../assets/img/ProgrammingLang/c.svg";
import cSharp from "../assets/img/ProgrammingLang/csharp.svg";
import bootstrap from "../assets/img/Frameworks/bootstrap.svg";
import react from "../assets/img/Frameworks/react.svg";
import spring from "../assets/img/Frameworks/spring.svg";
import javaFx from "../assets/img/Frameworks/JavaFX_Logo.png";
import laravel from "../assets/img/Frameworks/laravel.svg";
import phpUnit from "../assets/img/Frameworks/phpunit.svg";
import mysql from "../assets/img/DB/mysql-logo-svgrepo-com.svg";
import postgre from "../assets/img/DB/postgresql-svgrepo-com.svg";
import oracle from "../assets/img/DB/oracle.png";
import plsql from "../assets/img/DB/plsql.png";

import french from "../assets/img/Langages/flag-fr-svgrepo-com.svg";
import arabic from "../assets/img/Langages/flag-for-flag-morocco-svgrepo-com.svg";
import english from "../assets/img/Langages/flag-for-flag-united-kingdom-svgrepo-com.svg";

import git from "../assets/img/Tools/git-svgrepo-com.svg";
import github from "../assets/img/Tools/github-color-svgrepo-com.svg";
import figma from "../assets/img/Tools/figma-svgrepo-com.svg";
import canva from "../assets/img/Tools/canva-icon.svg";
import xamp from "../assets/img/Tools/xampp-svgrepo-com.svg";
import nosql from "../assets/img/Tools/nosql.png";
import postman from "../assets/img/Tools/postman-icon-svgrepo-com.svg";
import wordpress from "../assets/img/Tools/wordpress-color-svgrepo-com.svg";
import xml from "../assets/img/Tools/xml-document-svgrepo-com.svg";
import r from "../assets/img/Tools/R_logo.svg.png";
import uml from "../assets/img/Tools/téléchargement.png";
import office from "../assets/img/Tools/microsoft-office-2013-logo-svgrepo-com.svg";
import matlab from "../assets/img/Tools/matlab-svgrepo-com.svg";
import spss from "../assets/img/Tools/339-3393438_spss-spss-logo-hd-png-download.png";
import { style } from "framer-motion/client";
// import spss from "../assets/img/Tools/339-3393438_spss-spss-logo-hd-png-download.png";
import msproject from "../assets/img/Tools/msproject.png";

export const Skills = () => {
  
  const target = { fr: 80, eng: 50, arab: 100 };

const [values, setValues] = useState({ fr: 0, eng: 0, arab: 0 });
const [animated, setAnimated] = useState({ fr: false, eng: false, arab: false });

const onViewPort = (targetName) => {
  if (animated[targetName]) return;

  let current = 0;
  const timer = setInterval(() => {
    current++;
    if (current <= target[targetName]) {
      setValues((prev) => ({
        ...prev,
        [targetName]: current,
      }));
    } else {
      clearInterval(timer);
      setAnimated((prev) => ({
        ...prev,
        [targetName]: true,
      }));
    }
  }, 20);
};
const resetValue = (targetName) => {
  setValues((prev) => ({ ...prev, [targetName]: 0 }));
  setAnimated((prev) => ({ ...prev, [targetName]: false }));
};


  return (
    <section id="skills" className="skill bg-dange ">
      <div className="container ">
        <h2 className="pt-5 mb-5">Skills</h2>
        <div className="skill-container">
          {/* ProgrammingLang */}
          <motion.div
            className="skill-box bg-blac"
            initial={{ x: "-30vw" }}
            whileInView={{ x: "0vw" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skill-title">Programming Languages</h3>
            <div className="skills-list   ">
             
              <div className="skill-item ">
                <img src={c} />
                <p>C</p>
              </div>
              <div className="skill-item ">
                <img src={cpp} />
                <p>C++</p>
              </div>
              <div className="skill-item ">
                <img src={cSharp} />
                <p>C#</p>
              </div>
              <div className="skill-item  ">
                <img src={js} />
                <p>JavaScript</p>
              </div>
              <div className="skill-item ">
                <img src={php}  />
                <p>php</p>
              </div>
              <div className="skill-item ">
                <img src={java}/>
                <p>java</p>
              </div>
            </div>
          </motion.div>
          {/* FRAM */}
          <motion.div
            className="skill-box "
            initial={{ x: "-30vw" }}
            whileInView={{ x: "0vw" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skill-title ">Frameworks & Libraries</h3>
            <div className="skills-list  ">
              <div className="skill-item ">
                <img src={spring} />
                <p>Spring boot</p>
              </div>
              <div className="skill-item  ">
                <img src={javaFx} style={{ width: "70px", height: "40px" }} />
                <p>javaFX</p>
              </div>
              <div className="skill-item ">
                <img src={laravel} />
                <p>Laravel</p>
              </div>
              <div className="skill-item ">
                <img src={bootstrap} />
                <p>Bootstrap</p>
              </div>
              <div className="skill-item ">
                <img src={react} />
                <p>React js</p>
              </div>
              <div className="skill-item ">
                <img src={phpUnit} style={{ width: "70px", height: "40px" }} />
                <p>phpUnit</p>
              </div>
            </div>
          </motion.div>
          {/*db */}
          <motion.div
            className="skill-box "
            initial={{ x: "-30vw" }}
            whileInView={{ x: "0vw" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skill-title">DataBases</h3>
            <div className="skills-list  ">
              <motion.div
                className="skill-item "
                
              >
                <img src={mysql} />
                <p>MySQL</p>
              </motion.div>
              <motion.div className="skill-item" 
                
               
              
              >
                <img src={postgre} />
                <p>postgre</p>
              </motion.div>
              <motion.div className="skill-item " 
            
             
              
              >
                <img src={oracle} />
                <p>Oracle</p>
              </motion.div>
              <div className="skill-item ">
                <img src={plsql}  />
                <p>PL/SQL</p>
              </div>
              <div className="skill-item ">
                <img src={nosql} />
                <p>Nosql</p>
              </div>
            </div>
          </motion.div>
          {/*tools */}
          <motion.div
            className="skill-box "
            initial={{ x: "-30vw" }}
            whileInView={{ x: "0vw" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skill-title">Tools & technologies</h3>
            <div className="skills-list ">
              <div className="skill-item ">
                <img src={git} />
                <p>Git</p>
              </div>
              <div className="skill-item  ">
                <img src={github} />
                <p>GitHub</p>
              </div>
              <div className="skill-item ">
                <img src={uml} />
                <p>UML</p>
              </div>
              <div className="skill-item ">
                <img src={xml} />
                <p>XML</p>
              </div>
              <div className="skill-item ">
                <img src={postman} />
                <p>Postman</p>
              </div>
              <div className="skill-item ">
                <img src={wordpress} />
                <p>wordpress</p>
              </div>
              <div className="skill-item ">
                <img src={figma} />
                <p>Figma</p>
              </div>
              <div className="skill-item ">
                <img src={r} />
                <p>R</p>
              </div>
              <div className="skill-item ">
                <img src={spss} />
                <p>Spss</p>
              </div>
              <div className="skill-item ">
                <img src={matlab} />
                <p>Matlab</p>
              </div>
              <div className="skill-item ">
                <img src={canva} />
                <p>Canva</p>
              </div>
              <div className="skill-item ">
                <img src={xamp} />
                <p>Xampp</p>
              </div>
              <div className="skill-item ">
                <img src={office} />
                <p>(word,excel,ppt)</p>
              </div>
              <div className="skill-item ">
                <img src={msproject} />
                <p>MsProject</p>
              </div>
              {/* <div className="skill-item ">
                  <img src={office}  />
                    <p>(word,excel,ppt)</p>
                  </div> */}
            </div>
          </motion.div>

          {/*langages */}
          <motion.div
            className="skill-box "
            initial={{ x: "-30vw" }}
            whileInView={{ x: "0vw" }}
            transition={{ duration: 0.6 }}
            
          >
            <h3 className="skill-title ">Languages</h3>
            <div className="skills-list prog">
              



       
              <div className="skill-item-prog">
                <motion.div
                  className="text-center mb-3 circle-prog  "
                 
                  onViewportEnter={() => onViewPort("fr")}
                  onViewportLeave={() => resetValue("fr")}
                   whileHover={{scale:1.2}}
                >
                  <CircularProgressbar
                    value={values.fr}
                    text={`${values.fr}%`}
                    styles={buildStyles({
                      textColor: "#36e617",
                      pathColor: "#36e617",
                      trailColor: "#d6d6d6",
                    
                      pathTransitionDuration: 0.3,
                    })}
                  />
                </motion.div>

                <div className="skill-item3 d-flex align-items-center ms-2">
                  <img src={french} className="me-3" />
                  <span className=" text-center">French</span>
                </div>
              </div>
              <div className="skill-item-prog">
                <motion.div
                  className="text-center mb-3 circle-prog "
                  
                  onViewportEnter={() => onViewPort("eng")}
                  onViewportLeave={() => resetValue("eng")}
                   whileHover={{scale:1.2}}
                >
                  <CircularProgressbar
                    value={values.eng}
                    text={`${values.eng}%`}
                    styles={buildStyles({
                      textColor: "#36e617",
                      pathColor: "#36e617",
                      trailColor: "#d6d6d6",
                     
                      pathTransitionDuration: 0.3,
                    })}
                  />
                </motion.div>

                <div className="skill-item3 d-flex align-items-center ms-2">
                  <img src={english} className="me-3" />
                  <span className=" text-center">English</span>
                </div>
              </div>
              <div className="skill-item-prog">
                <motion.div
                  className="text-center mb-3 circle-prog"
                  
                  onViewportEnter={() => onViewPort("arab")}
                  onViewportLeave={() => resetValue("arab")}
                   whileHover={{scale:1.2}}
                >
                  <CircularProgressbar
                    value={values.arab}
                    text={`${values.arab}%`}
                    styles={buildStyles({
                      textColor: "#36e617",
                      pathColor: "#36e617",
                      trailColor: "#d6d6d6",
                     
                      pathTransitionDuration: 0.3,
                    })}
                  />
                </motion.div>

                <div className="skill-item3 d-flex align-items-center ms-2">
                  <img src={arabic} className="me-3" />
                  <span className=" text-center">Arabic</span>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import ensa from "../assets/img/logoEnsa.jpg";
import fst from "../assets/img/logoFst.png";
import lycee from "../assets/img/lycee.jpg";
import { Accordion } from "react-bootstrap";

const Education = () => {
  const isMobile = window.innerWidth <= 876;

    const educationData = [
        { 
          year: "2023 - Present",
          title: "Engineering cycle in Computer Science",
          description:
            "Currently pursuing my Software Engineering degree at the  National School of Applied Sciences  of Tangier (ENSAT).",
         img:ensa
        },
        {
          year: "2021 - 2023",
          title: "Integrated Preparatory Cycle",
          description:
            "Completed the integrated preparatory cycle at ENSAT",
             img:ensa
        },
        {
          year: "2020 - 2021",
          title: "First Year of DEUST",
          description:
            "Completed my first year of DEUST specializing in MIP (Mathematics, Computer Science, Physics) at the Faculty of Sciences and Technologies of Fes (FSTF).",
          img:fst
        },
        {
          year: "2019 - 2020",
          title: "Scientific Baccalaureate",
          description:
            "Graduated with a Scientific Baccalaureate, Physics-Chemistry option ,from Lycée AL WAHDA in Taounate.",
          img:lycee
        },
      ];

  return (
    <section className="education" id="education" >
      <h2 className="title">Education</h2>

      <div className="container education-timeline">
        <div className="timeline container-fluid">
          {educationData.map((item, key) => (
            <motion.div
              className="timeline-item"
              key={key}
              initial={{ x: "-30vw" }}
              whileInView={{ x: "0vw" }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header d-flex justify-content-between align-items-center">
                  <h3 className="year">{item.year}</h3>
                  <img src={item.img} className="school-logo rounded-pill" />
                </div>
                <h5 className="edu-title">{item.title}</h5>
                <p className="edu-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

     
    </section>
  );
};

export default Education;

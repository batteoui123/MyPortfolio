import React from "react";
import { motion } from "framer-motion";
import ensa from "../assets/img/logoEnsa.jpg";
import fst from "../assets/img/logoFst.png";
import lycee from "../assets/img/lycee.jpg";
import { Accordion } from "react-bootstrap";

const Education = () => {
  const isMobile = window.innerWidth <= 576;

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
            "Completed my first year of DEUST (Diploma in University Studies in Technology) specializing in MIP (Mathematics, Computer Science, Physics) at the Faculty of Sciences and Technologies of Fes (FSTF).",
          img:fst
        },
        {
          year: "2019 - 2020",
          title: "Scientific Baccalaureate",
          description:
            "Graduated with a Scientific Baccalaureate, Physics-Chemistry option, ith highest honour from Lycée AL WAHDA in Taounate.",
          img:lycee
        },
      ];

  return (
      <section className="education" id="education" >
         <h2 className="title">Education</h2>
         
         <div className="container-fluid education-timeline">
  {!isMobile ? (
    <div className="timeline">
      {educationData.map((item, key) => (
        <motion.div
          className="timeline-item"
          key={key}
          initial={{ x: "-30vw" }}
          whileInView={{ x: "0vw" }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content row d-flex align-items-center">
            <motion.div className="col-9" whileHover={{ scale: 1.07 }}>
              <h3>{item.year}</h3>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={key}>
                  <Accordion.Header className="accordion-header">
                    <h4>{item.title}</h4>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    <p>{item.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <div className="col-3 logoschol text-center">
              <img src={item.img} className="rounded-pill" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  ) : (
    <div className="timeline-mobile container-fluid">
      {educationData.map((item, key) => (
        <motion.div
          className="timeline-item-mobile"
          key={key}
          initial={{ x: "-30vw" }}
          whileInView={{ x: "0vw" }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content-mobile">
            <div className="timeline-header-mobile d-flex justify-content-between align-items-center">
              <h4 className="year">{item.year}</h4>
              <img src={item.img} className="school-logo-mobile rounded-pill" />
            </div>
            <p className="edu-title">{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )}
</div>





     
            
      </section>
  );
};

export default Education;

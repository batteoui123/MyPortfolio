import { Col } from "react-bootstrap";
import {delay, motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; 
import { useState } from "react";
import { FaChevronDown ,FaChevronUp} from "react-icons/fa";

import css from "../assets/img/ProgrammingLang/css3.svg";
import java from "../assets/img/ProgrammingLang/java.svg";
import html from "../assets/img/ProgrammingLang/html5.svg";

export const ProjectCard = ({ id, title, description, imgUrl,githubLink ,technologies}) => {
 
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev); // Toggle the open state
  };

  return (
    <motion.div
      className="card card-project box  m-3"
      initial={{ x: "-30vw" }}
      whileInView={{ x: "0vw" }}
      transition={{ duration: 0.6 }}
      style={{ width: "320px" }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="proj-imgbx">
        <img
          className="card-img-top "
          src={imgUrl}
          alt="Card image"
          style={{ height: "200px" }}
        />
      
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between">


        <h4 className="card-title mb-4 ">{title}   </h4>
         <a href={githubLink}  target="_blank" className="" >
            <FaGithub size={25} color="#772fff" />
          </a>
        </div>
       

        {/* Collapsible content */}
        <div id={id} className="card-text desc3">
          {description}
        </div>
      </div>

      <div className=" images-project  ">
        {technologies.map((tech) => (
          <img
            className="m-3 "
            src={tech}
            style={{ height: "20px", width: "20px" }}
          />
        ))}
      </div>
    </motion.div>
  );
};
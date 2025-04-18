import { Col } from "react-bootstrap";
import {delay, motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; 
import { useState } from "react";
import { FaChevronDown ,FaChevronUp} from "react-icons/fa";

import css from "../assets/img/ProgrammingLang/css3.svg";
import java from "../assets/img/ProgrammingLang/java.svg";
import html from "../assets/img/ProgrammingLang/html5.svg";

export const ProjectCard = ({ id, title, description, imgUrl ,technologies}) => {
 
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev); // Toggle the open state
  };

  return (
    <motion.div
      className="card card-project box  m-3"
      style={{ width: "360px" }}
      whileHover={{ scale: 1.14 }}
    >
      <div className="proj-imgbx">
        <img
          className="card-img-top "
          src={imgUrl}
          alt="Card image"
          style={{ height: "250px" }}
        />
        <div className="proj-txtx">
          <div className="text-start mt-3 images-project  ">
            {technologies.map((tech) => (
              <img
                className="m-2"
                src={tech}
                style={{ height: "40px", width: "40px" }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="card-body">
        <h4 className="card-title mb-4">{title} </h4>

        {/* Collapsible content */}
        <div id={id} className="card-text desc3">
          {description}
        </div>
      </div>
      <motion.a style={{ fontSize: "12px",opacity:'0.4' }} className="text-end m-2"
       whileHover={{ opacity:1}}
      
      >
        <FaGithub size={30}  />
      </motion.a>
    </motion.div>
  );
};
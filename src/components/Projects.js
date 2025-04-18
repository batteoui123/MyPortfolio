import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Projects/spring.png";
import projImg2 from "../assets/img/Projects/javafx.png";
import projImg3 from "../assets/img/Projects/laravel.png";
import projImg4 from "../assets/img/Projects/spring2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




//technologies
import cpp from "../assets/img/ProgrammingLang/cpp.svg";
import js from "../assets/img/ProgrammingLang/javascript.svg";
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

import next from "../assets/img/Frameworks/next.svg";
import tailwind from "../assets/img/Frameworks/tailwind.svg";
import vuejs from "../assets/img/Frameworks/vuejs.svg";
import angular from "../assets/img/Frameworks/angular.svg";
import groq from "../assets/img/Frameworks/groq.png";





// temp


export const Projects = () => {


  const projects = [
  
    {   
      title: "Freelance Service Marketplace",
      description: "As a backend developer, I contributed to building a platform connecting clients with freelance service providers, featuring service management, AI recommendations, messaging, ratings, and real-time notification",
      imgUrl: projImg1,
      technologies:[spring,tailwind,next,postgre,groq,]
    },
    {
      
      title: "School Management System ",
      description: "A JavaFX application for managing school operations, including student, teacher, module, and enrollment management, along with an intuitive dashboard and role-based access control",
      imgUrl: projImg2,
      technologies:[javaFx,postgre,css]
    },
    {  
      title: "Children's Activity Management Platform",
      description: "As a backend developer, I helped build a platform for managing children's activities, allowing administrators, animators, and parents to handle registrations, schedules, notifications, and activities.",
      imgUrl: projImg3,
      technologies:[laravel,postgre,vuejs,tailwind]
    },
    {
      
      title: "Medical Appointment and Records Management",
      description: "As a backend developer, I contributed to building a centralized platform for managing medical appointments and patient records, enabling secure online booking, cancellations, and access to medical files for patients, doctors, and administrators.",
      imgUrl: projImg4,
      technologies:[spring,postgre,angular]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <h2 className="main-title mb-5">Projects</h2>
            <TrackVisibility className="cardList">
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  
                  <p className="desc1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  <div className=" d-flex flex-wrap  justify-content-around
                  
                    
                  ">
                 
                   {projects.map((project, index) => {
        
                      return <ProjectCard key={index} id={index} {...project} />;
                    })}
                  </div>
                 
                  
                    
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        {/* second version */}
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
}

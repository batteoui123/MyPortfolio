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
      description: "Backend developer in a freelance service platform enabling smart matching, messaging, and real-time notifications.",
      imgUrl: projImg1,
      technologies:[spring,tailwind,next,postgre,groq,]
    },
    {
      
      title: "School Management System ",
      description: "JavaFX-based school management app with dashboards, role-based access, and student, teacher, and module tracking.",
      imgUrl: projImg2,
      technologies:[javaFx,postgre,css]
    },
    {  
      title: "Children's Activity Management Platform",
      description: "Backend developer in a platform for managing children’s activities, enabling registration, scheduling, and notifications for all roles",
      imgUrl: projImg3,
      technologies:[laravel,postgre,vuejs,tailwind]
    },
    {
      
      title: "Medical Appointment and Records Management",
      description: "Backend developer for a children’s activity platform, enabling role-based registration, scheduling, and notifications.",
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
                    typesetting industry.
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

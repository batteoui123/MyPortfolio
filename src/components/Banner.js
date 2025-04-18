import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/githubFinal.svg';
import { HashLink } from 'react-router-hash-link';
import { color, motion } from 'framer-motion';
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

import { FaHandsClapping } from "react-icons/fa6";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software engering student",
    "Web Designer",
    "UI/UX Designer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={15} md={6} xl={8} className="bg-">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/* <span className="tagline">Welcome to my Portfolio</span> */}

                    <h3 className="" style={{ color: "#9f55ff" }}>
                      <span className="me-3 hi">
                        <FaHandsClapping
                          size={40}
                          color="green"
                          style={{ marginBottom: "20px" }}
                        />
                      </span>{" "}
                      Hi! , i'm :{" "}hhhhgit
                    </h3>
                    <h1>{`EL-BATTEOUI OUSSAMA`} </h1>
                    <h2>
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='["Software engering student","jjjj" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>{" "}
                    </h2>

                     <p>
                    <span>{" "}</span> I'm a Software Engineering student at the National School
                      of Applied Sciences  of Tangier (ENSAT) 🎓. I'm passionate
                      about software development and committed to creating
                      scalable, efficient, and user-friendly solutions.
                    </p>

                    <p>
                      Currently in my second year, I've worked with technologies
                      like PHP, Laravel, Java, Spring Boot, and JavaScript,
                      gaining solid experience in both front-end and back-end
                      development. I'm eager to continue expanding my skills and
                      apply them to innovative projects 🚀.
                    </p>

                    <p>
                      I've contributed to exciting academic projects, including
                      a web platform for managing children’s activities and a
                      freelance service marketplace, which has enhanced my
                      coding abilities and teamwork skills.
                    </p>

                    <p>
                      I’m always seeking new challenges 💡 and opportunities to
                      grow professionally 🌱.
                    </p>

                    <div className="d-flex justify-content-start ">
                      <a href={"#contact"} style={{ textDecoration: "none" }}>
                        <motion.button
                          className="btn1 justify-content-center me-3"
                          whileHover={{ scale: 1.2 }}
                        >
                          <span className="">contact me</span>
                        </motion.button>
                      </a>
                      <a href="#" style={{ textDecoration: "none" }}>
                        <motion.button
                          className="btn1 justify-content-center ms-3"
                          whileHover={{ scale: 1.2 }}
                        >
                          <span>download cv</span>
                        </motion.button>
                      </a>
                    </div>
                  </div>
                )}
              </TrackVisibility>
              <div className="social-icon  bg-succes  d-flex justify-content-start my-5">
                <motion.a
                  href="https://www.linkedin.com/in/elbatteoui-oussama-54b59427a/"
                  className="me-3 "
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={navIcon1} alt="Icon 1" />
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/oussama.batiwi.7"
                  className="me-3"
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <img src={navIcon2} alt="Icon 2" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/oussamaelbatteoui/"
                  className="me-3"
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <img src={navIcon3} alt="Icon 3" />
                </motion.a>
                <motion.a
                  href="https://github.com/batteoui123"
                  className="me-3"
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  
                  <img src={navIcon4} style={{width:'32px'}} alt="Icon 4" />
                </motion.a>
              </div>
            </Col>

            <Col xs={12} md={6} xl={4} className="bg-inf">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img className="profil" src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

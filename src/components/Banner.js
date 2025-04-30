import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/imgprofil.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/githubFinal.svg';
import download from '../assets/img/download.svg';
import { HashLink } from 'react-router-hash-link';
import { color, motion } from 'framer-motion';
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";




import { FaHandsClapping } from "react-icons/fa6";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "< Software engineering student />",
    "< Web Developer />",
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
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <section className="banner " id="home">
        <div className="container  align-items-center">
          <Row className=" d-flex  mb-2 ">
            <Col xs={12} md={7} xl={8} className="first-cl  align-self-center ">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/* <span className="tagline">Welcome to my Portfolio</span> */}

                    <h3 className="gretting" style={{ color: "#9f55ff" }}>
                      <span className="me-3 hi">
                        <FaHandsClapping
                          size={40}
                          color="green"
                          style={{ marginBottom: "20px" }}
                        />
                      </span>{" "}
                      Hi! , i'm :{" "}
                    </h3>
                    <h1 className="myname">{`EL-BATTEOUI OUSSAMA`} </h1>
                    <h2>
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='["Software engering student","jjjj" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>{" "}
                    </h2>
                  </div>
                )}
              </TrackVisibility>
              <div className="social-icon  bg-succes  d-flex justify-content-start my-5">
                <motion.a
                  href="https://www.linkedin.com/in/elbatteoui-oussama-54b59427a/"
                  target="_blank"
                  className="me-3 "
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={navIcon1} alt="Icon 1" />
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/oussama.batiwi.7"
                  target="_blank"
                  className="me-3"
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <img src={navIcon2} alt="Icon 2" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/oussamaelbatteoui/"
                  target="_blank"
                  className="me-3"
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <img src={navIcon3} alt="Icon 3" />
                </motion.a>
                <motion.a
                  href="https://github.com/batteoui123"
                  target="_blank"
                  className="me-3"
                  initial={{ y: "0vw" }}
                  whileInView={{ y: ["2vw", "-2vw", "0vw"] }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <img src={navIcon4} style={{ width: "32px" }} alt="Icon 4" />
                </motion.a>
              </div>
            </Col>

            <Col xs={12} md={5} xl={4} className="">
              <TrackVisibility className="track">
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      className="profil  "
                      src={headerImg}
                      alt="Header Img"
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <Row className="about-me">
            <Col xs={12} md={12} xl={12}>
              <p>
                &nbsp;&nbsp; &nbsp; I'm a <strong>Software Engineering student</strong>  at the
                National School of Applied Sciences of Tangier (ENSAT) 🎓. I
                have a strong passion for developing scalable and efficient
                software solutions, always focusing on delivering high-quality
                user experiences.
              </p>

            

              <p>
                I have gained hands-on
                experience with technologies like <strong> React,Next js, Spring Boot,
                and Laravel,</strong>  focusing on both front-end and back-end
                development. I have contributed to academic projects such as
                web platforms for activity management and freelance
                service marketplaces, which have strengthened my
                <strong> problem-solving </strong> abilities and improved my teamwork skills in
                collaborative settings.
              </p>

              <p>
                I am always looking for new challenges and opportunities to grow
                🌱. When I’m not coding, you’ll
                find me exploring new technologies, reading, or engaging in
                outdoor activities. 🚀
              </p>

              <div className="grp-btn-banner">
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
                    whileHover={{ scale: 1.07 }}
                  >
                    <span>download cv</span>
                    
                  </motion.button>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

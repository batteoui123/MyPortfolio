import { Container, Row, Col } from "react-bootstrap";
import { color, motion } from 'framer-motion';
import navIcon4 from '../assets/img/githubFinal.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer  " >
      <Container  className="d-flex  flex-column align-items-center ">
        {/* <Row className="align-items-center"> */}
          
          
          {/* <Col size={12} sm={6} className="text-center text-sm-end  d-flex flex-column align-items-center mt-5 "> */}
           <p>elbatteoui.oussama@etu.uae.ac.ma</p>
            <div className="social-icon  ">
              <a href="https://www.linkedin.com/in/elbatteoui-oussama-54b59427a/" className="me-3"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/oussama.batiwi.7" className="me-3"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/oussamaelbatteoui/" className="me-3"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/batteoui123" className="me-3"><img className="bg-dange" style={{width:'20px'}} src={navIcon4} alt="Icon" /></a>
            </div>
            <p className="fw-bold ">Copyright 2025. All Rights Reserved</p>
          
            <motion.div className="logo2 mt-2" style={{background:''}}
            initial={{x:'6vw'}}
            whileInView={{x:0 }}
            transition={{duration:0.4}}
            
            
            > El batteoui oussama</motion.div>
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    </footer>
  )
}

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { delay, motion } from "framer-motion";

import { FaEnvelope, FaWhatsapp, FaLocationArrow } from 'react-icons/fa';
import { Cursor } from "react-bootstrap-icons";


export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }

  const MotionCol = motion(Col);

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Validation
    if (!formDetails.name || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: 'All fields are required!' });
        setTimeout(() => {
      setStatus({ success: null, message: '' });  // Réinitialiser le message
    }, 8000); // 3000 ms = 3 secondes 
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDetails.email)) {
      setStatus({ success: false, message: 'Please enter a valid email address.' });
      setTimeout(() => {
        setStatus({ success: null, message: '' });  // Réinitialiser le message
      }, 8000); // 3000 ms = 3 secondes 
        return;
      return;
    }

    setButtonText("Sending...");
    
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");

    let result = await response.json();
    setFormDetails(formInitialDetails);

    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  

    
    setTimeout(() => {
      setStatus({ success: null, message: '' });  // Réinitialiser le message
    }, 4000); // 3000 ms = 3 secondes 
  
  };

  return (
    <section className="contact bg-succes" id="contact">
      <h2 className="text-center mb-5">Contact</h2>
      <Container  className="bg-primar">
        <Row className="align-items-center">
          <Col md={12} sm={12} lg={5} className=" myinfos">
            <motion.div       
              initial={{ x: "-30vw" }}
              whileInView={{ x: "0vw" }}
              transition={{ duration: 0.6 }}
            >
              <div className="contactMe">
                <div className="CMcard">
                  <div className="mb-3 ">
                    <FaEnvelope color="#0b76a8" className="fav1" />{" "}
                    <span className="btn btn-secondary rounded-pill ms-2"  >elbatteoui.oussama@etu.uae.ac.ma</span>
                  </div>
                </div>

                <div className="CMcard">
                  <div className="mb-3">
                    <FaWhatsapp color="#25D366" className="fav1" />{" "}
                    <span className="btn btn-secondary rounded-pill ms-2"  >+212 654-579050</span>
                  </div>
                </div>

                <div className="CMcard">
                  <div className="mb-3">
                    <FaLocationArrow color="blue"  className="fav1"/>{" "}
                    <span className="btn btn-secondary rounded-pill ms-2" >Tangier, Morocco</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* <Col md={12} sm={12} lg={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  initial={{ x: "30vw" }}
                  whileInView={{ x: "0vw" }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="getouch">Get In Touch</h3>
                  <form onSubmit={handleSubmit} className="bg-dange">
                    <Row>
                      <Col size={12} sm={12} className=" elmt">
                        <input
                          type="text"
                          value={formDetails.name}
                          placeholder="Name"
                          onChange={(e) => onFormUpdate("name", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={12} className=" elmt ">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                        />
                      </Col>
                      <Col size={12} className=" bg-dange elmt">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                        ></textarea>
                        <div className="d-flex bg-dange align-items-center mybtn ">
                           <button type="submit text-center send " className="">
                               <span>{buttonText}</span>
                           </button>
                       
                             {status.message && (
                    
                                   <div className=" " style={{marginLeft:'auto'}}>
                                 <p className={status.success === false ? "danger" : "success"}>
                                    {status.message} 
                                </p>
                                </div>
                      

                            )} 
                          
                        </div>
                        
                      </Col>
                      
                    </Row>
                  </form>
                </motion.div>
              )}
            </TrackVisibility>
          </Col> */}


<Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import homeLogo from "../assets/about.png";
import Type from "../components/Home/Type";
import './home.css'


const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="Home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ display: 'flex', alignItems: 'center' }} className="home-headers">
                <h1 style={{ paddingBottom: 15 , padding: '10px'}} className="heading">
                  Hey, I'm<strong className="main-name">
                    {" "}
                     Nithin
                  </strong>
                </h1>
                <div className="home-headers">
                  <Type />
                </div>
              </div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "19px",
                  fontFamily: "Inconsolata, monospace",
                }}
              >
                I am a skilled web developer with expertise in MERN Stack. With a strong foundation in computer science, I have
                the ability to design and develop visually appealing and
                responsive websites.
              </p>
             <Button variant="primary" className="nithin" onClick={scrollToContact}>work with me <i class="fa-solid fa-arrow-right"></i></Button>
            
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;

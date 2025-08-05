import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub,} from "react-icons/ai";
import {FaLinkedinIn, FaStackOverflow} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/*
        Hi, I'm Ravi Kumar — a Java backend developer with over 7 years of industry experience, passionate about building
        scalable microservices and robust enterprise solutions. I specialize in Java, Spring Boot, and JDBI,
        and have hands-on experience with EJB, REST APIs, PostgreSQL, and Kafka.
        */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm Ravi Kumar — a
              <i>
                <b className="purple"> Java backend developer </b>
              </i>
               &nbsp; with over 7.10 years of industry experience
              <br /> passionate about building scalable microservices and robust enterprise solutions.
              <br />
              <br/>
              I specialize in Java, Spring Boot, and JDBI,
              and have hands-on experience with EJB, REST APIs, PostgreSQL, and Kafka
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ravi-prajapati-1995"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ravi-prajapati95"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/6887285/ravi-raggu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

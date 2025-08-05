import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import buyfy from "../../Assets/Projects/buyfy.png";
import Bentect from "../../Assets/Projects/Bentect.png";
import workPace from "../../Assets/Projects/workPace.png";
import AiImage from "../../Assets/Projects/AiImage.png";
import gemskart9 from "../../Assets/Projects/gemskart9.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workPace}
              isBlog={false}
              title="Workpace"
              description=" Theproject summarizes the company management system application.  Thesystem typically includes modules for managing employees, payroll, inventory, sales, and customer data. It may also provide tools for generating reports, tracking performance metrics, and automating routine tasks"
              demoLink="https://app.workpace.net/auth/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bentect}
              isBlog={false}
              title="Bentect"
              description=" Bentect is an Australian Company. In this project, we have to create a web application which provides observation of the product which services they provide, and add any new observations, if any. We can also assign that to the vendor to be fixed."
              demoLink="https://app.bentect.com.au/auth/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buyfy}
              isBlog={false}
              title="Buyfy"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              demoLink="https://app.buyfy.biz/homepage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AiImage}
              isBlog={false}
              title="AI Image Generator"
              description="Unlock the power of artificial intelligence to generate high-quality, exquisite visuals tailored to your needs. Our AI Image Generator produces stunning graphics that can be seamlessly ungrouped in PowerPoint or Google Slides, allowing for effortless customization. Whether you need icons, illustrations, or complex designs, each element can be edited individually to fit your unique style. Best of all, every image is scalable to any size without losing clarity or resolution, ensuring crisp, professional results for presentations, marketing materials, and digital content. Experience the future of design—where creativity meets AI-powered precision!"
              demoLink="https://www.slideteam.net/AI-powered-powerpoint-editable-icons-and-image-generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemskart9}
              isBlog={false}
              title="GemsKart9"
              description="GemsKart9 is a trusted e-commerce platform offering authentic spiritual and astrological products, including Rudraksha beads, certified gemstones, Vastu consultancy services, Yantras, and Feng Shui remedies. Each product is carefully selected to enhance positivity, prosperity, and well-being, backed by expert guidance. Whether you seek divine blessings, cosmic energy, or harmony in life, GemsKart9 provides genuine solutions for a balanced and auspicious lifestyle."
              demoLink="http://188.166.172.245:8080/auth/login"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemskart9}
              isBlog={false}
              title="GemsKart9"
              description="GemsKart9 is a trusted e-commerce platform offering authentic spiritual and astrological products, including Rudraksha beads, certified gemstones, Vastu consultancy services, Yantras, and Feng Shui remedies. Each product is carefully selected to enhance positivity, prosperity, and well-being, backed by expert guidance. Whether you seek divine blessings, cosmic energy, or harmony in life, GemsKart9 provides genuine solutions for a balanced and auspicious lifestyle."
              // ghLink="https://github.com/Ayushgautam2401/AI_For_Social_Good"
              demoLink="http://188.166.172.245:8080/auth/login"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

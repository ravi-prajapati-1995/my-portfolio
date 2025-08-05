import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiGraylog,
    SiIntellijidea,
    SiJira,
    SiMiro,
    SiPostman,
    SiSonarqube,
    SiVisualstudiocode,
    SiWindows,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons" title={"IntelliJ Idea"}>
                <SiIntellijidea/>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title={"Miro"}>
                <SiMiro/>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title={"Sonar Qube"}>
                <SiSonarqube/>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title={"Gray Log"}>
                <SiGraylog/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows/>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title={"VSCode"}>
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title={"Postman"}>
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons" title={"Jira"}>
                <SiJira/>
            </Col>
        </Row>
    );
}

export default Toolstack;

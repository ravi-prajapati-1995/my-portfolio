import React from "react";
import {Col, Row} from "react-bootstrap";
import {DiDocker, DiJava,} from "react-icons/di";
import {FaAws} from "react-icons/fa";
import {
    SiAngular,
    SiApachekafka,
    SiHibernate,
    SiJenkins,
    SiJunit5,
    SiMysql,
    SiPostgresql,
    SiPython,
    SiRedis,
    SiSpringboot,
    SiThymeleaf,
} from "react-icons/si";


function Techstack() {
    return (<Row style={{justifyContent: "center", paddingBottom: "50px"}}>
        <Col xs={4} md={2} className="tech-icons" title={"Java 21"}>
            <DiJava/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Spring Boot"}>
            <SiSpringboot/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Apache Kafka"}>
            <SiApachekafka/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Redis"}>
            <SiRedis/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"MySql"}>
            <SiMysql/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Angular"}>
            <SiAngular/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Postgresql"}>
            <SiPostgresql/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Hibernate"}>
            <SiHibernate/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"AWS"}>
            <FaAws/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Docker"}>
            <DiDocker/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Jenkins"}>
            <SiJenkins/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Python"}>
            <SiPython/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Junit 5"}>
            <SiJunit5/>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title={"Thymleaf"}>
            <SiThymeleaf/>
        </Col>
    </Row>);
}

export default Techstack;

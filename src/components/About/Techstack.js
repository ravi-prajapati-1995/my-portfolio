import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {BsFiletypeHtml, BsFiletypeScss} from "react-icons/bs";
import {CgCPlusPlus} from "react-icons/cg";
import {
    DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiAws, DiDocker, DiJenkins,
} from "react-icons/di";
import {FaAws, FaBootstrap, FaJenkins} from "react-icons/fa";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
    SiCsswizardry,
    SiMysql,
    SiTypescript,
    SiSpringboot,
    SiApachekafka,
    SiAngular,
    SiJquery,
    SiHibernate,
    SiAwsamplify,
    SiJenkins,
    SiJenkinsx,
    SiJunit5,
    SiJunipernetworks,
    SiTestinglibrary,
    SiPython,
    SiThymeleaf,
} from "react-icons/si";
import {TbBrandGolang, TbBrandRedux, TbBrandTypescript} from "react-icons/tb";


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

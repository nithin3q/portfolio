import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiCss3,
  SiMongodb,
  SiHtml5,
  SiPhp,SiMysql
} from "react-icons/si";

import "./Techstack.css"; // Import CSS file for styling

const Techstack = () => {
  return (
    <Row className="tech-icons-container">
      <div className="marquee">
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </div>
    </Row>
  );
}

export default Techstack;

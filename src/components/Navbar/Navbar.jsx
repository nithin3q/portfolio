import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";

// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { CgFileDocument } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { NavHashLink } from "react-router-hash-link";


function NavBar({ setShowResume }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  //links all components
  // function toggleTheme() {
  //   let html = document.getElementsByTagName('html')[0]
  //   html.classList.toggle('light')
  // }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
            <NavHashLink className="nav-link " smooth to="#Home"  onClick={() => {updateExpanded(false);setShowResume(false);}}>
            <AiOutlineHome style={{ marginBottom: "5px" }} /> Home
            </NavHashLink>
            </Nav.Item>
            <Nav.Item>
            <NavHashLink className="nav-link " smooth to="#Education"  onClick={() => {updateExpanded(false);setShowResume(false);}}>
            <FaBookOpen style={{ marginBottom: "2px" }} /> Education
            </NavHashLink>
            </Nav.Item>
            <Nav.Item>
            <NavHashLink className="nav-link " smooth to="#Skillset"  onClick={() => {updateExpanded(false);setShowResume(false);}}>
            <GiSkills style={{ marginBottom: "2px" }}/> Skillset
            </NavHashLink>
            </Nav.Item>
            <Nav.Item>
            <NavHashLink className="nav-link " smooth to="#Projects"  onClick={() => {updateExpanded(false);setShowResume(false);}}>
            <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                /> Projects
            </NavHashLink>
            </Nav.Item>
            <Nav.Item>
            <NavHashLink className="nav-link " smooth to="#Resume" onClick={() => { updateExpanded(false); setShowResume(true); }}>
  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
</NavHashLink>

            </Nav.Item>
            <Nav.Item>
            <NavHashLink className="nav-link " smooth to="#Contact"  onClick={() => {updateExpanded(false);setShowResume(false);}}>
            <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact Me
            </NavHashLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

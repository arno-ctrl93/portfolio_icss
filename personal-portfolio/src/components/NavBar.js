/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react"
import {Navbar, Container } from "react-bootstrap"


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => { window.removeEventListener("scroll", onScroll) };
    } , []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    };


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span clasName="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" clasName={activeLink === "home" ? "active navbar-link" : "navbar-link "} onClick={() => onUpdateActiveLink('home')}>Home class</Nav.Link>
                <Nav.Link href="#skills" clasName={activeLink === "skills" ? "active navbar-link" : "navbar-link "} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" clasName={activeLink === "projects " ? "active navbar-link" : "navbar-link "} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={''} alt="" /> </a>
                    <a href="#"><img src={''} alt="" /> </a>
                    <a href="#"><img src={''} alt="" /> </a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
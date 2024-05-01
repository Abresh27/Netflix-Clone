import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
const dropdownStyle = {
  width: "5px",
};

function NavBar() {
  //Scroll event handling
  const [navBg, setNavbg] = useState(false);
  const handleScroll = () => {
    window.scrollY > 50 ? setNavbg(true) : setNavbg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar className={`fixed-top ${navBg && "add_bg"}`} expand="lg">
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home">
          <img
            src="../../../Images/Netflix_Logo_RGB.png"
            width="178"
            height="75"
            className="d-inline-block align-top"
            alt="Netflix logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">TV Shows</Nav.Link>
            <Nav.Link href="#action2">Movise</Nav.Link>
            <Nav.Link href="#action2">Latest</Nav.Link>
            <Nav.Link href="#action2">My List</Nav.Link>
            <Nav.Link href="#action2">Browse by Languages</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link className="search" href="#action1">
              <div></div>
            </Nav.Link>
            <Nav.Link href="#action1">Kids</Nav.Link>
            <Nav.Link href="#action1">DVD</Nav.Link>
            <Nav.Link className="notification" href="#action1">
              <div></div>
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src={
                    "../../../Images/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"
                  }
                  alt="user image"
                  width="20px"
                  height="20px"
                />
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3" style={dropdownStyle}>
                Setting
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={dropdownStyle}>
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

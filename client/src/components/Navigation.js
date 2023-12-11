import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkData } from "../data/LinkData";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = ({ NavHeight }) => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      style={{
        height: NavHeight,
        width: "100%",
      }}
    >
      <Container>
        <Navbar.Brand href="/">McWorks Showcase</Navbar.Brand>
        <Nav className="me-auto">
          {LinkData.map((link, index) => {
            if (link.subLinks.length === 0) {
              return (
                <Nav.Link href={link.link} key={index}>
                  {link.alias}
                </Nav.Link>
              );
            } else {
              return (
                <NavDropdown key={index} title={link.alias}>
                  {link.subLinks.map((s, i) => {
                    return (
                      <NavDropdown.Item key={i} href={s.link}>
                        {s.alias}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              );
            }
          })}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

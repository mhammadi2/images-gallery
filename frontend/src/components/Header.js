import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarstyle = {
  backgroundColor: "lightblue",
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navbarstyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

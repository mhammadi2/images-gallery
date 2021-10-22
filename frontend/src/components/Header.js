import React from "react";
import { Navbar, Container } from "react-bootstrap";
import {ReactComponent as Logo} from '../images/logo.svg';

const navbarstyle = {
  backgroundColor: "#eeeeee",
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navbarstyle} variant="light">
      <Container>
        {/* <Navbar.Brand href="/">{title}</Navbar.Brand> */}
        <Logo style={{maxWidth: '12rem', maxHeight: '4rem'}}/>
      </Container>
    </Navbar>
  );
};

export default Header;

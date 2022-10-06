import React from "react";
import { Badge , Container , Nav , Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type Props = {
  handleOpen: (state: boolean) => void;
}
const NavBar=({handleOpen}: Props)=>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Link className="navbar-brand" to='/'>E-commerce</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Link className="nav-link" to="/">Home</Link>
                    </Nav>
                  </Navbar.Collapse>
                  <FontAwesomeIcon 
                    icon={faShoppingCart}
                    color="white"
                    size="2x"
                    style={{ cursor: 'pointer'}}
                    onClick={() => handleOpen(true)} />
                   <Badge bg='secondary'>0</Badge>
                </Container>
              </Navbar>
            );
          }
 
export default NavBar;
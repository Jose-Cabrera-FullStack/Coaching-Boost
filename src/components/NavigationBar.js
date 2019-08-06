import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
  background-color: #222;
  }
  
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    
    &:hover {
      color: white;
    }
  }
  `;
export const NavigationBar = () => (
  <Styles>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link>
            <Link to="/promotion">Promotions!</Link>
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Our Prices" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Personal Trainer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Team Trainer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Boosting</NavDropdown.Item>
      </NavDropdown>
        <Nav.Item>
          <Nav.Link>
            <Link to="/coaching">Coaching</Link>
          </Nav.Link>
        </Nav.Item>
      {/* Averiguar diferencia entre href="" y to=""*/}
          <NavDropdown title="Support" id="basic-nav-dropdown">
        <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
      </NavDropdown>
          <Nav.Item>
            <Nav.Link>
              <Link to="/reviews">Reviews</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)


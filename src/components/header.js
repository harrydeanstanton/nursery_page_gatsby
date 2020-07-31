import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const ImageWrapper = styled.img`
  width: 40%;
  border-radius: 50%;
`;

const Header = ({ siteLogo }) => (
  <header>
    <Container>
      
      <Navbar expand="lg">
      <Navbar.Brand href="/"><ImageWrapper src={siteLogo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className = "ml-auto">
            <Nav.Item as="li">
              <Link  to="/pricing" className="nav-link" activeClassName="active">Cennik</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/admissions" className="nav-link" activeClassName="active">Rekrutacja</Link>
            </Nav.Item> 
            <NavDropdown as="li" title="O nas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/description">Opis</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Zdjęcia</NavDropdown.Item>
              <NavDropdown.Item href="/schedule">Plan dnia</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li">
              <Link to="/adaptation" className="nav-link" activeClassName="active">Adaptacja</Link>
            </Nav.Item> 
            <Nav.Item as="li">
              <Link to="/contact" className="nav-link" activeClassName="active">Kontakt</Link>
            </Nav.Item> 
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``

}



export default Header

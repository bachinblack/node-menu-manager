import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">TastyCloud</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://bachinblack.github.io" target="_blank">Createur</Nav.Link>
          <NavDropdown title="Gestion du menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/manage/dishes">Plats</NavDropdown.Item>
            <NavDropdown.Item href="/manage/drinks">Boissons</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/manage/ingredients">Ingrédients</NavDropdown.Item>
            <NavDropdown.Item href="/manage/categories">Catégories</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
          {/* <Button variant="outline-success"><FontAwesomeIcon icon={faSearch} /></Button> */}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
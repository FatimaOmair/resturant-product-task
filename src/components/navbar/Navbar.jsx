import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Custom() {
  return (
    <Navbar expand="lg " className="bg-body-tertiary font">
      <Container>
        <Navbar.Brand href="#home" className='font'>Resturant-task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/products">Products</Link>
            <Link to="/resturant">Resturant</Link>
          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Custom;

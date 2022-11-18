import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import {ReactComponent as Logo} from '../logo.svg' 
const Header = ()=>{
  return (
    <Navbar className='Nav' collapseOnSelect expand="lg" >
      <Container className='nav'>
        <Navbar.Brand href="#home" className="nav-brand mr-auto brand hover:animate-pulse" style={{color:"#fff"}}><Logo /> Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggleIcon"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className='nav-link transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110' style={{color:"#fff"}}>Browse Arts</Nav.Link>
            <Nav.Link href="#" className='nav-link transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110' style={{color:"#fff"}}>Contact me</Nav.Link>
            <Nav.Link eventKey={2} href="#"  className='nav-link transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110' style={{color:"#fff"}}>
               About Project
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
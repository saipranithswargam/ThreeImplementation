import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
const Header = ()=>{
  return (
    <Navbar className='Nav' collapseOnSelect expand="lg" >
      <Container className='nav'>
        <Navbar.Brand href="#home" className="nav-brand mr-auto brand hover:animate-pulse" >GemSeason</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className='nav-link transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110' >Contact me</Nav.Link>
            <Nav.Link eventKey={2} href="#"  className='nav-link transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110' >
               About Project
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
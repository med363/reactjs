import { Link } from 'react-router-dom';
import { Navbar , Container , Nav } from 'react-bootstrap';
function NavBar(){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand > <Link to={"/"} >My First React Router App</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link > <Link to={"/home"} > Home </Link> </Nav.Link>
                <Nav.Link > <Link to={"/about"} >About</Link> </Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;
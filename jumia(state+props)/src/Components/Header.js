// component 1
import  {  Container, Navbar , NavDropdown , Nav }  from 'react-bootstrap'
export default function Header(){


    return(
        // primary , secondary , success , danger , dark , warning , light
        <>
            <Navbar bg="light" expand="sm"> 
            <Container >
                <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link href="#home"  >Home</Nav.Link>
                    <Nav.Link href="#home"  >About</Nav.Link>
                    <Nav.Link href="#home"  >Services</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                 
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )


}
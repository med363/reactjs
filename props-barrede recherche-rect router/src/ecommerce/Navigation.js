import { Container , Nav , NavDropdown ,Navbar  } from 'react-bootstrap'

function Navigation(props){

    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Panier ( { props.data } ) </Nav.Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}

export default Navigation;
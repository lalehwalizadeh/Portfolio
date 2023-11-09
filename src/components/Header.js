
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

    return (
        <Navbar expand="lg" >
            <Container className="container-fluid" >
                <Navbar.Brand href=""> Portfolio </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav >
                        <Nav.Link to='/home'> Home </Nav.Link>
                        <Nav.Link to="/about"> About </Nav.Link>
                        <Nav.Link href="#contact"> Contact </Nav.Link>
                        <Nav.Link href="#portfolio"> Portfolio </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
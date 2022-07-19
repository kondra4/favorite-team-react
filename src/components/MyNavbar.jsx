import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">YourFavTeams</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Sign in</Nav.Link>
                        <Nav.Link href="#pricing">Sign up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;
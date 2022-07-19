import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import Search from "./Search";

function MyNavbar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>YourFavTeams</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to="/signin">
                            <Nav.Link>Sign in</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link>Sign up</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            <Search/>
        </>
    );
}

export default MyNavbar;
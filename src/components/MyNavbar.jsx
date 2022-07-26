import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import Search from "./Search";

import { AuthContext } from "../context/AuthContext";

function MyNavbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logOut = (event) => {
    event.preventDefault();
    setIsAuth(false);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>YourFavTeams</Navbar.Brand>
          </LinkContainer>
          {isAuth ? (
            <Nav className="me-auto">
              <LinkContainer to="/favorites">
                <Nav.Link>Favorites</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/history">
                <Nav.Link>History</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link onClick={logOut}>Log Out</Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <LinkContainer to="/signin">
                <Nav.Link>Sign in</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Container>
      </Navbar>
      <Search />
    </>
  );
}

export default MyNavbar;

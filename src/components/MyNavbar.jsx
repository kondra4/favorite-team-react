import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../store/reducers/userSlice";

function MyNavbar() {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  const logOut = (event) => {
    event.preventDefault();
    dispatch(logOutAction());
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

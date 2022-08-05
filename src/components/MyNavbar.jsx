import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import { ThemeContext } from "../context/ThemeContext";
import { useGetCurrentUser } from "../hooks/useGetUserCurrent";
import { logOutAction } from "../store/reducers/userSlice";

import { Search } from "./Search";
import { SwitchTheme } from "./SwitchTheme";

export function MyNavbar() {
  const dispatch = useDispatch();

  let isAuth = false;

  const currentUser = useGetCurrentUser();

  if (currentUser) {
    isAuth = currentUser.isAuth;
  }

  const logOut = (event) => {
    event.preventDefault();

    dispatch(logOutAction(currentUser.email));
  };

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar sticky="top" bg={`${theme}`} variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>YourFavTeams</Navbar.Brand>
          </LinkContainer>
          {isAuth ? (
            <Container>
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
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <a>{currentUser.email}</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Nav>
            </Container>
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
          <SwitchTheme />
        </Container>
      </Navbar>
      <Search />
    </>
  );
}

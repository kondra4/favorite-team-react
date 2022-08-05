import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { MyNavbar } from "./components";
import {
  DetailsPage,
  FavoritesPage,
  HistoryPage,
  HomePage,
  NotFound,
  SearchPage,
  SignIn,
  SignUp,
} from "./pages";

import { RequirePrivate } from "./hoc/RequirePrivate";
import { ThemeProvider } from "./context/ThemeContext";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <MyNavbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/favorites"
              element={
                <RequirePrivate>
                  <FavoritesPage />
                </RequirePrivate>
              }
            />
            <Route
              path="/history"
              element={
                <RequirePrivate>
                  <HistoryPage />
                </RequirePrivate>
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/details/:teamID" element={<DetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Container>
    </ThemeProvider>
  );
}

export default App;

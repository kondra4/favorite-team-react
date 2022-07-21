import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from "./components/MyNavbar";
import HomePage from './pages/HomePage'
import FavoritesTeams from './pages/FavoritesTeams'
import DetailsTeam from './pages/DetailsTeam'
import SearchPage from './pages/SearchPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from "./pages/NotFound";
import HistoryPage from "./pages/HistoryPage";

import { AuthContext } from "./context/AuthContext";

import {RequirePrivate} from "./hoc/RequirePrivate";


function App() {

    const [isAuth, setIsAuth] = useState(false);

  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth
      }}>
          <Container>
              <MyNavbar/>
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/signin" element={<SignIn/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/favorites" element={
                      <RequirePrivate>
                          <FavoritesTeams/>
                      </RequirePrivate>
                  }/>
                  <Route path="/history" element={
                      <RequirePrivate>
                          <HistoryPage/>
                      </RequirePrivate>
                  }/>
                  <Route path="/search" element={<SearchPage />}/>
                  <Route path="/details" element={<DetailsTeam />}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </Container>
      </AuthContext.Provider>
  );
}

export default App;

import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'
import FavoritesTeams from './pages/FavoritesTeams'
import DetailsTeam from './pages/DetailsTeam'
import SearchPage from './pages/SearchPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from "./pages/NotFound";
import MyNavbar from "./components/MyNavbar";
// import CardGroup from "./components/CardGroup";
// import teams from "./teams.json"
// import Search from "./components/Search";


function App() {

  return (
      <Container>
          <MyNavbar/>
          {/*// <Container>*/}
          {/*//*/}
          {/*//     <Container>*/}
          {/*//         <Search/>*/}
          {/*//         <CardGroup arrRes = {teams.response}/>*/}
          {/*//     </Container>*/}
          {/*// </Container>*/}
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/favorites" element={<FavoritesTeams />}/>
              {/*<Route path="/history" element={<SignIn />}/>*/}
              <Route path="/search" element={<SearchPage />}/>
              <Route path="/details" element={<DetailsTeam />}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Container>

  );
}

export default App;

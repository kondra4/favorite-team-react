import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavbar";
import Search from "./components/Searc";
import CardGroup from "./components/CardGroup";
import teams from "./teams.json"

function App() {

  return (
      <Container>
          <MyNavbar/>
          <Container>
              <Search/>
              <CardGroup arrRes = {teams.response}/>
          </Container>
      </Container>
  );
}

export default App;

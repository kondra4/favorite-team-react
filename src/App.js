import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Search from "./components/Search";
import MyNavbar from "./components/MyNavbar";
import CardGroup from "./components/CardGroup";
import teams from "./teams.json";

function App() {

  const [items, setItems] = useState([]);



  // useEffect(() => {
  //     fetch("https://v3.football.api-sports.io/teams?league=39&season=2021", {
  //         "method": "GET",
  //         "headers": {
  //             "x-rapidapi-host": "v3.football.api-sports.io",
  //             "x-rapidapi-key": "cfe5edf0247d1ae87ee56a90d093030c"
  //         }
  //     })
  //         .then(res => res.json())
  //         .then((json) => {
  //             setItems(json)
  //             console.log(json)
  //         })
  // }, []);
  //
  // console.log(items)

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

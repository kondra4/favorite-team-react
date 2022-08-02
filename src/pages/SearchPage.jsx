import React from "react";
import CardItem from "../components/CardItem";
import { useSearchTeamQuery } from "../store/reducers/teamsApi";
import { useSearchParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchPage = () => {
  const [search] = useSearchParams();

  const searchTitle = search.get("search");

  const { data } = useSearchTeamQuery(searchTitle);

  return data ? (
    <Row xs={1} md={4} className="g-4">
      {data.map((team) => (
        <Col key={team.id}>
          <CardItem teamInfo={team} />
        </Col>
      ))}
    </Row>
  ) : null;
};

export default SearchPage;

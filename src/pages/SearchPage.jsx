import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardItem } from "../components";
import { useSearchTeamQuery } from "../store/reducers/teamsApi";
import { useCustomSearchParams } from "../hooks/useCustomSearchParams";

export const SearchPage = () => {
  const [searchTitle] = useCustomSearchParams();

  const { search } = searchTitle;

  const { data } = useSearchTeamQuery(search);

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

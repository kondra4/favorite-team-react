import React from "react";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";
import Col from "react-bootstrap/Col";
import CardItem from "./CardItem";
import teams from "../teams.json";

const FastSearchList = ({ searchTitle, open, setOpen }) => {
  // const { data } = useSearchTeamQuery(searchTitle);

  const data = teams.response.map((obj) => obj.team);

  return searchTitle ? (
    open ? (
      data ? (
        <div className="shadow-lg mb-5 bg-light rounded ">
          <Row xs={1} md={4} className="g-4 p-4">
            {data.slice(",", 4).map((team) => (
              <LinkContainer
                key={team.id}
                onClick={() => setOpen(false)}
                to={`/details/${team.id}`}
              >
                <Col className="d-grid">
                  <CardItem teamInfo={team} />
                </Col>
              </LinkContainer>
            ))}
          </Row>
        </div>
      ) : null
    ) : null
  ) : null;
};

export default FastSearchList;

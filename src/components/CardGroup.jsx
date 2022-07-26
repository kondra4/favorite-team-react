import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardGroup({ arrRes }) {
  const navigate = useNavigate();

  const showMore = (teamID) => {
    navigate(`/details/${teamID}`, { state: teamID });
  };

  return (
    <Row xs={1} md={4} className="g-4">
      {arrRes.map((arrRes) => (
        <Col key={arrRes.team.id}>
          <Card>
            <Card.Header className="text-center">
              {arrRes.team.name}
            </Card.Header>
            <Card.Img variant="top" src={arrRes.team.logo} />
            <ListGroup variant="flush">
              <ListGroup.Item>{arrRes.team.country}</ListGroup.Item>
              <ListGroup.Item>{arrRes.team.founded}</ListGroup.Item>
            </ListGroup>
            <ButtonGroup size="sm">
              <Button onClick={() => showMore(arrRes.team.id)}>More</Button>
              <Button variant="outline-success">+ Add in favorites</Button>
            </ButtonGroup>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGroup;

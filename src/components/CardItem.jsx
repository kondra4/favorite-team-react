import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import { FavoriteButton } from "./FavoriteButton";

export function CardItem({ teamInfo }) {
  return (
    <Card>
      <Card.Header className="text-center">{teamInfo.name}</Card.Header>
      <Card.Img variant="top" src={teamInfo.logo} />
      <ListGroup variant="flush">
        <ListGroup.Item>{teamInfo.country}</ListGroup.Item>
        <ListGroup.Item>{teamInfo.founded}</ListGroup.Item>
      </ListGroup>
      <ButtonGroup size="sm">
        <LinkContainer to={`/details/${teamInfo.id}`}>
          <Button>More</Button>
        </LinkContainer>
        <FavoriteButton id={teamInfo.id} />
      </ButtonGroup>
    </Card>
  );
}

CardItem.propTypes = {
  teamInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    country: PropTypes.string,
    founded: PropTypes.number,
    logo: PropTypes.string,
  }),
};

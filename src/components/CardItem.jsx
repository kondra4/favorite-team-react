import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FavoriteButton from "./FavoriteButton";

function CardItem({ teamInfo }) {
  const navigate = useNavigate();

  const showMore = (teamID) => {
    navigate(`/details/${teamID}`, { state: teamID });
  };

  return (
    <Card>
      <Card.Header className="text-center">{teamInfo.name}</Card.Header>
      <Card.Img variant="top" src={teamInfo.logo} />
      <ListGroup variant="flush">
        <ListGroup.Item>{teamInfo.country}</ListGroup.Item>
        <ListGroup.Item>{teamInfo.founded}</ListGroup.Item>
      </ListGroup>
      <ButtonGroup size="sm">
        <Button onClick={() => showMore(teamInfo.id)}>More</Button>
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

export default CardItem;

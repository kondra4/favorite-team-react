import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import FavoriteButton from "./FavoriteButton";
import PropTypes from "prop-types";

const DetailsTeam = ({ moreInfo }) => {
  return (
    <Card key={moreInfo.id} className="w-50 mx-auto">
      <Card.Header className="text-center">{moreInfo.name}</Card.Header>
      <Card.Img variant="top" src={moreInfo.image} />
      <ListGroup variant="flush">
        <ListGroup.Item>{moreInfo.address}</ListGroup.Item>
        <ListGroup.Item>{moreInfo.city}</ListGroup.Item>
        <ListGroup.Item>{moreInfo.capacity}</ListGroup.Item>
      </ListGroup>
      <FavoriteButton id={moreInfo.id} />
    </Card>
  );
};

DetailsTeam.propTypes = {
  moreInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    capacity: PropTypes.number,
    city: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default DetailsTeam;

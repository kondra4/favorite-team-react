import React from "react";
import Card from "react-bootstrap/Card";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const DetailsTeam = ({ arrRes }) => {
  return arrRes.map((arrRes) => (
    <Card key={arrRes.venue.id} className="w-50 mx-auto">
      <Card.Header className="text-center">{arrRes.venue.name}</Card.Header>
      <Card.Img variant="top" src={arrRes.venue.image} />
      <ListGroup variant="flush">
        <ListGroup.Item>{arrRes.venue.address}</ListGroup.Item>
        <ListGroup.Item>{arrRes.venue.city}</ListGroup.Item>
        <ListGroup.Item>{arrRes.venue.capacity}</ListGroup.Item>
      </ListGroup>
      <ButtonGroup size="sm">
        <Button variant="outline-success">+ Add in favorites</Button>
      </ButtonGroup>
    </Card>
  ));
};

export default DetailsTeam;

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import {Heart} from "react-bootstrap-icons";
import {ButtonGroup, ListGroup} from "react-bootstrap";

function CardGroup({arrRes}) {

    // console.log(arrRes.map((obj) => obj.team.logo))
    return (
        <Row xs={1} md={4} className="g-4">
            {arrRes.map((arrRes) => (
                <Col key={arrRes.team.id}>
                    <Card>
                        <Card.Header className="text-center" >
                            {arrRes.team.name}
                        </Card.Header>
                        <Card.Img variant="top" src={arrRes.team.logo}/>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{arrRes.team.country}</ListGroup.Item>
                            <ListGroup.Item>{arrRes.team.founded}</ListGroup.Item>
                        </ListGroup>
                        <ButtonGroup size="sm">
                            <Button>More</Button>
                            <Button variant="outline-success">+ Add in favorites</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardGroup;
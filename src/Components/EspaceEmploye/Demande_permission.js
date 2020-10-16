import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";

class Demande_permission extends React.Component {

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Formulaire de demande de permission</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col >
                                <Form>
                                    <Form.Group controlId="formBasicCNI">
                                        <Form.Label>Du</Form.Label>
                                        <Form.Control type="date" placeholder="dd/mm/yy" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicNom">
                                        <Form.Label>Au</Form.Label>
                                        <Form.Control type="date" placeholder="dd/mm/yy " />
                                    </Form.Group>

                                </Form>

                                <Form.Group controlId="exampleForm.Ntel">
                                    <Form.Label>N° matricule</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.Ntel">
                                    <Form.Label>Motif</Form.Label>
                                    <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>

                        </Row>

                    </Card.Body>
                    <Card.Footer>
                        <button> Envoyer</button>
                    </Card.Footer>
                </Card>

            </Aux>
        );
    }
}

export default Demande_permission;

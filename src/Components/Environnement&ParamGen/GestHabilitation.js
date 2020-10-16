import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";


class GestHabilitation extends React.Component {

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as='h5'>Définir les habilitations d'un groupe</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="mb-3">
                            <div className="col-6 offset-3">
                                <Form inline>
                                    <Form.Group className="mb-2">
                                        <Form.Control plaintext readOnly defaultValue="Selectionnez le groupe : "/>
                                    </Form.Group>
                                    <Form.Group className="mb-2 mr-5">
                                        <Form.Control as="select">
                                            <option value="0" disabled={true} selected={true}>Selectionnez...</option>
                                            <option value="1    ">Administrateurs</option>
                                            <option value="2">Responsable RH</option>
                                            <option value="2">Assistant RH</option>
                                            <option value="3">Employé</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Row>
                        <Table responsive bordered className="shadow-sm">
                            <thead className="bg-light">
                            <tr className="text-center">
                                <th>N°</th>
                                <th>Nom du programme</th>
                                <th>Attribution</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center">
                                <th>1</th>
                                <td>Gestion des utilisateurs</td>
                                <td>
                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        id="checkbox1"
                                        label=""
                                    />
                                </td>
                            </tr>
                            <tr className="text-center">
                                <th>2</th>
                                <td>Gestion des utilisateurs</td>
                                <td>
                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        id="checkbox2"
                                        label=""
                                    />
                                </td>
                            </tr>
                            <tr className="text-center">
                                <th>1</th>
                                <td>Gestion des utilisateurs</td>
                                <td>
                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        id="checkbox3"
                                        label=""
                                    />
                                </td>
                            </tr>
                            <tr className="text-center">
                                <th>1</th>
                                <td>Gestion des utilisateurs</td>
                                <td>
                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        id="checkbox4"
                                        label=""
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="text-center">
                            <Button className="mb-0">Validez</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default GestHabilitation;

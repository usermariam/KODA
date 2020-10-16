import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import avatar1 from "../../assets/images/user/avatar-1.jpg";
import DEMO from "../../store/constant";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

class GestPoste extends React.Component {

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as='h5'>Ajouter un poste</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="mb-3">
                            <Col>
                                <Form inline>
                                    <Form.Group className="mb-2">
                                        <Form.Control plaintext readOnly defaultValue="Intitulé du poste : "/>
                                    </Form.Group>
                                    <Form.Group className="mb-2 mr-5">
                                        <Form.Control type="password" placeholder="Ex : Trésorier"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button onClick={() => {}}>Valider</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Title as='h5'>Liste des postes</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive bordered>
                            <thead>
                            <tr className="text-center bg-light">
                                <th>Code du poste</th>
                                <th>Intitulé du poste</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="unread">
                                <td>
                                    TRESOR
                                </td>
                                <td>
                                    Trésorier
                                </td>
                                <td className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a>
                                    <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded">Supprimer</a>
                                </td>
                            </tr>
                            <tr className="unread">
                                <td>
                                    DSI
                                </td>
                                <td>
                                    Directeur du service informatique
                                </td>
                                <td className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a>
                                    <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded">Supprimer</a>
                                </td>
                            </tr>
                            </tbody>
                        </Table>

                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default GestPoste;

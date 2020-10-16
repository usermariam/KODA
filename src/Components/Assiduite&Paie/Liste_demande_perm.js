import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button, Table, InputGroup, FormControl} from "react-bootstrap";
import DEMO from "../../store/constant";

class liste_demande_perm extends React.Component {

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Liste des demandes de permissions</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table bordered responsive>
                            <thead>
                            <tr className="bg-light">
                                <th>N°demande</th>
                                <th>Matricule</th>
                                <th>Date départ</th>
                                <th>Date retour</th>
                                <th>Type permission</th>
                                <th>Statut </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="unread">
                                <th scope="row">01</th>
                                <td>CI0025</td>
                                <td>20/02/10</td>
                                <td>20/08/10</td>
                                <td>20/08/10</td>
                                <td className="text-center"><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Accepter</a>
                                    <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded">Refuser</a>
                                </td>

                            </tr>
                            <tr className="unread">
                                <th scope="row">CI0258</th>
                                <td>Ouattara Zélé</td>
                                <td>DRH</td>
                                <td>24</td>
                                <td>24</td>
                                <td className="text-center"><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Accepter</a>
                                    <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded">Refuser</a>
                                </td>
                            </tr>
                            <tr className="unread">
                                <th scope="row">CI0258</th>
                                <td>Ouattara Zélé</td>
                                <td>DRH</td>
                                <td>24</td>
                                <td>24</td>
                                <td className="text-center"><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Accepter</a>
                                    <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded">Refuser</a>
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

export default liste_demande_perm;

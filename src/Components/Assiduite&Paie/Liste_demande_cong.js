import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import DEMO from "../../store/constant";

class Liste_demande_cong extends React.Component {

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Liste des demandes de congés</Card.Title>
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default Liste_demande_cong;

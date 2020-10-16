import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import DEMO from "../../store/constant";
import {GetData} from "../../services/api";

class Liste_contrat extends React.Component {

    componentDidMount() {
        this.getDataFromAPI();
    }

    state = {
        dataToSend: {
        },
        dataToReceive: [ ]
    }

    getDataFromAPI(){
        GetData('Employe/SignatureContrat-all').then((result)=>{
            console.log("result : ",result)
            if(result){
                this.setState({
                    dataToReceive : result
                })
            }
        }).catch((error)=>{
            console.log("error : ",error)
        })
    }


    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Liste des contrats</Card.Title>
                        </Card.Header>
                    <Card.Body>
                        <Table bordered responsive >
                            <thead>
                            <tr className="text-center bg-light">
                                <th>Matricule</th>
                                <th>Date de signature</th>
                                <th>Type</th>
                                <th>Durée</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="unread">
                                <th scope="row">CI0258</th>
                                <td>02/02/1999</td>
                                <td>cdi</td>
                                <td>24</td>
                                <td className="text-center"><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded">Renouveller</a></td>

                            </tr>
                            <tr>
                                <th scope="row">CI0258</th>
                                <td>02/02/1999</td>
                                <td>cdi</td>
                                <td>24</td>
                                <td className="text-center" ><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded btn-rounded">Renouveller</a></td>

                            </tr>
                            <tr>
                                <th scope="row">CI0258</th>
                                <td>02/02/1999</td>
                                <td>cdi</td>
                                <td>24</td>
                                <td className="text-center"><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded btn-rounded btn-rounded">Renouveller</a></td>

                            </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default Liste_contrat;

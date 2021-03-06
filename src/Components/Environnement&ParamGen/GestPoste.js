import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import avatar1 from "../../assets/images/user/avatar-1.jpg";
import DEMO from "../../store/constant";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";
import {GetData, PostData} from "../../services/api";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class GestPoste extends React.Component {

    componentDidMount() {
        this.getDataFromAPI();
    }

    state = {
        dataToSend:{
            libelle : ""
        },
        dataToReceive:[],
    }

    getDataFromAPI(){
        GetData('Poste-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataToReceive : result
                })
            }
        }).catch((error)=>{

        })
    }
    sendToAPI(){
        PostData('Poste-create' , this.state.dataToSend).then((result)=>{
            if(result){
                alert("Ajouté")
            }
            this.getDataFromAPI();
        }).catch(error=>{

        })
    }
    onChange(e){
        let data = this.state.dataToSend;
        data[e.target.name] = e.target.value;
        this.setState({
            dataToSend : data
        })
    }

    suppPoste(id , libelle){
        confirmAlert({
            title: 'Suppression de '+libelle,
            message: 'Voulez-vous supprimé',
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => {
                        PostData('Poste-delete' , {id:id}).then((result)=>{
                        }).catch(error=>{
                        })
                        this.getDataFromAPI();
                    }
                },
                {
                    label: 'Non',
                    onClick: () => {}
                }
            ],
        });

    }

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
                                        <Form.Control  name="libelle" type="text" value={this.state.dataToSend.libelle} onChange={(e)=>{this.onChange(e)}} placeholder="Ex : Trésorier"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button onClick={()=>this.sendToAPI()}>Valider</Button>
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
                            {
                                this.state.dataToReceive.map((item)=>{
                                    return (
                                        <tr className="unread">
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.libelle}
                                            </td>
                                            <td className="text-center">
                                                <a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a>
                                                <a href={DEMO.BLANK_LINK} onClick={()=>{this.suppPoste(item.id , item.libelle)}} className="label theme-bg text-white f-12 btn-rounded">Supprimer</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>

                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default GestPoste;

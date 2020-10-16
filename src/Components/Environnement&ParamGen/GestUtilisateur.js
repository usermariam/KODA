import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import DEMO from "../../store/constant";
import {GetData, PostData} from "../../services/api";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class GestUtilisateur extends React.Component {

    componentDidMount() {
        this.getDataFromAPI();
        this.getDataGroupUtil()
    }

    state = {
        dataToSend:{
            username : "",
            password: "AZERTY",
            groupe : {
                id : -1
            }
        },
        dataToReceive:[],
        dataGroupUtil:[],
    }

    sendToAPI(){
        PostData('Utilisateur-create' , this.state.dataToSend).then((result)=>{
            if(result){
                alert("Ajouté")
            }
            this.getDataFromAPI();
        }).catch(error=>{

        })
    }

    suppUtil(id , username){
        confirmAlert({
            title: 'Suppression de '+username,
            message: 'Voulez-vous supprimé',
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => {
                        PostData('Utilisateur-delete' , {id:id}).then((result)=>{
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

    getDataFromAPI(){
        GetData('Utilisateur-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataToReceive : result
                })
            }
        }).catch((error)=>{

        })
    }

    getDataGroupUtil(){
        GetData('Groupe-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataGroupUtil : result
                })
            }
        }).catch((error)=>{

        })
    }


    //pour récupérer les informations saisies dans les different champs
    onChange(e){
        let data = this.state.dataToSend;
        data[e.target.name] = e.target.value;
        this.setState({
            dataToSend : data
        })
    }

    onSelectGroup(e){
        let data = this.state.dataToSend;
        data.groupe.id = e.target.value;
        this.setState({
            dataToSend : data
        })
    }

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as='h5'>Ajouter un utilisateur</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="mb-3">
                            <div className="col-md-4 col-sm-6 col-12">
                                <Form.Group >
                                    <Form.Label>Nom d'utilisateur</Form.Label>
                                    <Form.Control name="username" type="text" value={this.state.dataToSend.username} onChange={(e)=>{this.onChange(e)}} placeholder="Nom d'utilisateur..." />
                                </Form.Group>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <Form.Group>
                                    <Form.Label>Groupe utilisateur</Form.Label>
                                    <Form.Control name="groupe" value={this.state.dataToSend.groupe.id} onChange={(e)=>{this.onSelectGroup(e)}} as="select">
                                        <option value={-1} disabled={true}>Selectionnez</option>
                                        {
                                            this.state.dataGroupUtil.map((item)=>{
                                                return(
                                                    <option value={item.id}>{item.libelle}</option>
                                                )
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <Form.Group >
                                    <Form.Label className="text-white">valider</Form.Label>
                                    <Form.Control onClick={()=>this.sendToAPI()} type="button" value="valider" className="btn-primary"/>
                                </Form.Group>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Title as='h5'>Liste des utilisateurs</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive bordered>
                            <thead>
                            <tr className="text-center bg-light">
                                <th>Nom et Prénoms</th>
                                <th>Nom d'utilisateur</th>
                                <th>Groupe utilisateur</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.dataToReceive.map((item)=>{
                                    return (
                                        <tr className="unread">
                                            <td>
                                                {
                                                    (item.employe)?item.employe.nom + " "+item.employe.prenom :
                                                        " "
                                                }
                                            </td>
                                            <td>
                                                {item.username}
                                            </td>
                                            <td>
                                                {item.groupe.libelle}
                                            </td>
                                            <td className="text-center">
                                                <a href={DEMO.BLANK_LINK}  className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a>
                                                <a href={DEMO.BLANK_LINK} onClick={()=>{this.suppUtil(item.id , item.username)}} className="label theme-bg text-white f-12 btn-rounded">Supprimer</a>
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

export default GestUtilisateur;

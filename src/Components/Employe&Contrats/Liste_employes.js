import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import DEMO from "../../store/constant";
import {GetData, PostData} from "../../services/api";

class liste_employes extends React.Component {

    componentDidMount() {
        this.getDataFromAPI();
    }

    state = {
        dataToSend: {
            nom: "",
            nomUser: "",
            groupe: 0,
        },
        dataToReceive: [

        ]
    }

    getDataFromAPI(){
        GetData('Employe-all').then((result)=>{
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
                        <Card.Title as="h5">Liste des employés</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table bordered responsive>
                            <thead>
                            <tr className="text-center bg-light">
                                <th>Matricule</th>
                                <th>Nom</th>
                                <th>Prenoms</th>
                                <th>Date_naiss</th>
                                <th>Lieu_naiss</th>
                                <th>Genre</th>
                                <th>Nombre enfants</th>
                                <th>Pays</th>
                                <th>Adresse</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.dataToReceive.map((item)=>{
                                    return (
                                        <tr className="unread" key={item.matriculeEmploye}>
                                            <td>
                                                {item.matriculeEmploye}
                                            </td>
                                            <td>
                                                {item.nom}
                                            </td>
                                            <td>
                                                {item.prenom}
                                            </td>
                                            <td>
                                                {item.dateNaiss}
                                            </td>
                                            <td>
                                                {item.lieuNaiss}
                                            </td>
                                            <td>
                                                {item.genre.libelle}
                                            </td>
                                            <td>
                                                {item.nbreEnfants}
                                            </td>
                                            <td>
                                                {item.pays.libelle}
                                            </td>
                                            <td>
                                                {item.adresse}
                                            </td>
                                            <td>
                                                {item.email}
                                            </td>
                                            <td className="text-center">
                                                <a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12 btn-rounded">Modifier</a>
                                                <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12 btn-rounded">Supprimer</a>
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

export default liste_employes;

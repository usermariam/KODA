import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import {GetData, PostData} from "../../services/api";

class Nouveau_contrat extends React.Component {
    componentDidMount() {
        this.getDataGenre();
        this.getDataPays()
        //this.getDataStatutMat()
    }
    state ={
        dataToSend:{
            nom: "",
            prenom: "",
            dateNaiss: "",
            lieuNaiss: "",
            genre: {
                id: -1,
            },
            nbreEnfants: -1,
            pays: {
                id: -1,
            },
            adresse: "",
            email: ""
        },
        dataGenre:[],
        dataPays:[]
        //DataStatutMat:[]
    }
    getDataGenre(){
        GetData('Genre-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataGenre : result
                })
            }
        }).catch((error)=>{

        })
    }

    getDataPays(){
        GetData('Pays-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataPays : result
                })
            }
        }).catch((error)=>{

        })
    }

    /*getDataStatutMat(){
        GetData('StatutMatrimonial-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    DataStatutMat : result
                })
            }
        }).catch((error)=>{

        })
    }*/
    sendToAPI(){
        PostData('Employe-create' , this.state.dataToSend).then((result)=>{
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

    onSelectGenre(e){
        let data = this.state.dataToSend;
        data.genre.id = e.target.value;
        this.setState({
            dataToSend : data
        })
    }
    onSelectPays(e){
        let data = this.state.dataToSend;
        data.pays.id = e.target.value;
        this.setState({
            dataToSend : data
        })
    }
    /*onSelectSatutMat(e){
        let data = this.state.dataToSend;
        data.genre.id = e.target.value;
        this.setState({
            dataToSend : data
        })
    }*/
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Informations relatives à l'employé</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCNI">
                                        <Form.Label>N°CNI</Form.Label>
                                        <Form.Control type="text" placeholder="CI00" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicNom">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control type="text" name="nom" value={this.state.dataToSend.nom} onChange={(e)=>{this.onChange(e)}} placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPrénoms">
                                        <Form.Label>Prénoms</Form.Label>
                                        <Form.Control type="text" name="prenom" value={this.state.dataToSend.prenom} onChange={(e)=>{this.onChange(e)}} placeholder="jbj" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicSexe">
                                        <Form.Label>Sexe</Form.Label>
                                        <Form.Control name="genre" value={this.state.dataToSend.genre.id} onChange={(e)=>{this.onSelectGenre(e)}} as="select">
                                            <option value={-1} disabled={true}>Selectionnez</option>
                                            {
                                                this.state.dataGenre.map((item)=>{
                                                    return(
                                                        <option value={item.id}>{item.libelle}</option>
                                                    )
                                                })
                                            }
                                            </Form.Control>

                                    </Form.Group>
                                    <Form.Group controlId="formBasicDatedenaiss">
                                        <Form.Label>Date de naissance</Form.Label>
                                        <Form.Control type="Date"  name="dateNaiss" value={this.state.dataToSend.dateNaiss} onChange={(e)=>{this.onChange(e)}} placeholder="dd/mm/yyyy" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicLieudenaiss">
                                        <Form.Label>Lieu de naissance</Form.Label>
                                        <Form.Control type="text" name="lieuNaiss" value={this.state.dataToSend.lieuNaiss} onChange={(e)=>{this.onChange(e)}} placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDatedenaiss">
                                        <Form.Label>Nombre Enfants</Form.Label>
                                        <Form.Control type="text" name="nbreEnfants" value={parseInt(this.state.dataToSend.nbreEnfants)} onChange={(e)=>{this.onChange(e)}} placeholder="" />
                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.Ntel">
                                    <Form.Label>N°télephone</Form.Label>
                                    <Form.Control type="tel" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.Email">
                                    <Form.Label>Email </Form.Label>
                                    <Form.Control type="email"  name="email" value={this.state.dataToSend.email} onChange={(e)=>{this.onChange(e)}} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.adresse">
                                    <Form.Label>Adresse</Form.Label>
                                    <Form.Control type="text" name="adresse" value={this.state.dataToSend.adresse} onChange={(e)=>{this.onChange(e)}} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.pays">
                                    <Form.Label>Pays</Form.Label>
                                    <Form.Control name="pays" value={this.state.dataToSend.pays.id} onChange={(e)=>{this.onSelectPays(e)}}as="select">
                                        <option value={-1} disabled={true}>Selectionnez</option>
                                        {
                                            this.state.dataPays.map((item)=>{
                                                return(
                                                    <option value={item.id}>{item.libelle}</option>
                                                )
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ville">
                                    <Form.Label>Ville</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ville">
                                    <Form.Label>Statut matrimonial</Form.Label>
                                    <Form.Control as="select">
                                        <option>Marié</option>
                                        <option>Celebataire</option>
                                        <option>Veuf</option>
                                    </Form.Control>
                                </Form.Group>

                         </Col>
                        </Row>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Informations relatives au poste</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCNI">
                                        <Form.Label>Département</Form.Label>
                                        <Form.Control as="select">
                                            <option>Informatique</option>
                                            <option>Ressources humaines</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicNom">
                                        <Form.Label>Service</Form.Label>
                                        <Form.Control as="select">
                                            <option>Autre</option>
                                            <option>Autre</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPrénoms">
                                        <Form.Label>Poste</Form.Label>
                                        <Form.Control as="select">
                                            <option>Secretaire</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicSexe">
                                        <Form.Label>Grade</Form.Label>
                                        <Form.Control type="data" placeholder="" />
                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.Ntel">
                                    <Form.Label>Salaire brut</Form.Label>
                                    <Form.Control type="email" placeholder="Montant" />
                                </Form.Group>
                                <Row>
                                    <Col>

                                        <Form.Group controlId="exampleForm.Email">
                                            <Form.Label>Type de contrat </Form.Label>
                                            <Form.Control  as="select">
                                                <option>Cdi</option>
                                                <option>Cdd</option>
                                                <option>Ctt</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>

                                        <Form.Group controlId="exampleForm.Email">
                                            <Form.Label>Durée </Form.Label>
                                            <Form.Control  as="select">
                                                <option>6 mois</option>
                                                <option>1 ans</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="exampleForm.Date">
                                    <Form.Label>Date début</Form.Label>
                                    <Form.Control type="Date" placeholder="dd/MM/YY" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.pays">
                                    <Form.Label>Date fin</Form.Label>
                                    <Form.Control type="Date" placeholder="dd/MM/YY" />
                                </Form.Group>

                            </Col>

                        </Row>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Informations bancaitre</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCNI">
                                        <Form.Label>Banque</Form.Label>
                                        <Form.Control type="text" placeholder="Bcici" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicNom">
                                        <Form.Label>Adresse</Form.Label>
                                        <Form.Control type="email" placeholder="2 plateaux " />
                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.Ntel">
                                    <Form.Label>N° de compte</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>

                            </Col>

                        </Row>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Contact d'urgence </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCNI">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control type="Text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicNom">
                                        <Form.Label>Prénoms</Form.Label>
                                        <Form.Control type="Text" placeholder="" />
                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.Ntel">
                                    <Form.Label>N° téléphone</Form.Label>
                                    <Form.Control type="Numéro" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.Email">
                                    <Form.Label>Adresse mail </Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>

                            </Col>

                        </Row>

                    </Card.Body>
                </Card>
                <div className="text-center">
                    <Button onClick={()=>this.sendToAPI()}>Valider</Button>
                </div>
            </Aux>
        );
    }
}

export default Nouveau_contrat;

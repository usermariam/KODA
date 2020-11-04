import React from 'react';
import Aux from "../../hoc/_Aux";
import {Row, Card, Col, Form, Button , Table} from "react-bootstrap";
import {GetData, PostData} from "../../services/api";

class Nouveau_contrat extends React.Component {
    componentDidMount() {
        this.getDataGenre();
        this.getDataPays();
        this.getDataSituation();
        this.getDataPostes();
        this.getDataTypeContrat();
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
            email: "",
        },sendToApiPoste:{
            employe: {
                matriculeEmploye: "EMPAA0000",
            },
            poste: {
                id:-1,
            }
        },
        sendToApiSignature:{
            employe: {
                matriculeEmploye:"EMPAA0000",
            },
            typeContrat: {
                id:0,
            },
            dateSign:"2020-10-26",
            salaireBase:0.0,
            duree:""
        },
        sendToApiSituation:{
            employe: {
                matriculeEmploye: "EMPAA0000",
            },
            situationMatrimoniale: {
                id: 2,
            }
        },
        dataGenre:[],
        dataPays:[],
        dataSituation:[],
        dataPoste:[],
        dataTypeContrat:[],
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

    getDataSituation(){
        GetData('SituationMatrimoniale-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataSituation : result
                })
            }
        }).catch((error)=>{

        })
    }
    getDataPostes(){
        GetData('Poste-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataPoste : result
                })
            }
        }).catch((error)=>{

        })
    }
    getDataTypeContrat(){
        GetData('TypeContrat-all').then((result)=>{
            //si tt c"est bien passé
            if(result){
                this.setState({
                    dataTypeContrat : result
                })
            }
        }).catch((error)=>{

        })
    }
    sendToAPI(){
        PostData('Employe-create' , this.state.dataToSend).then((result)=>{
            if(result){
                //On récupère le matricule de l'employé créé
                let matricule = result.matriculeEmploye;
                alert("ok employe"+matricule)

                //On passe le matricule de l'employe aux différentes apis qui en ont besoin
                let data = this.state.sendToApiSituation;
                data["employe"].matriculeEmploye = matricule;
                this.setState({
                    sendToApiSituation : data
                })
                let data1 = this.state.sendToApiPoste;
                data1["employe"].matriculeEmploye = matricule;
                this.setState({
                    sendToApiPoste : data1
                })
                let data2 = this.state.sendToApiSignature;
                data2["employe"].matriculeEmploye = matricule;
                this.setState({
                    sendToApiSignature : data2
                })

                //Avant d'afficher le message d'enregistrement de l'employé on vérifie que toutes les apis retournent un bon resultat
                PostData('EmployeSituation-create' , this.state.sendToApiSituation).then((result)=>{
                    if(result.employe){
                        alert("ok situation"+result.employe)

                        PostData('EmployePoste-create' , this.state.sendToApiPoste).then((result)=>{
                            if(result.employe){
                                alert("ok poste"+result.employe)

                                PostData('SignatureContrat-create' , this.state.sendToApiSignature).then((result)=>{
                                    if(result.employe.matriculeEmploye){
                                        alert("ok contrat"+result.employe.matriculeEmploye)
                                        alert("Employe enregistré avec succès")
                                    }
                                }).catch(error=>{
                                    alert("Erreur signature"+error.toString())
                                });

                            }
                        }).catch(error=>{
                            alert("Erreur poste!!!  "+error.toString())
                        });
                    }
                }).catch(error=>{
                    alert("erreur situation!!!  "+error.toString())
                });
            }
        }).catch(error=>{
            alert("erreur employe!!!  "+error.toString())
        });

    }

    onChange(e){
        let data = this.state.dataToSend;
        data[e.target.name] = e.target.value;
        this.setState({
            dataToSend : data
        })
    }
    onChangeSituation(e){
        let data = this.state.sendToApiSituation;
        data[e.target.name] = e.target.value;
        this.setState({
            sendToApiSituation : data
        })
    }
    onChangeSignature(e){
        let data = this.state.sendToApiSignature;
        data[e.target.name] = e.target.value;
        this.setState({
            sendToApiSignature : data
        })
    }
    onChangePoste(e){
        let data = this.state.sendToApiPoste;
        data[e.target.name] = e.target.value;
        this.setState({
            sendToApiPoste : data
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
    onSelectSituation(e){
        let data = this.state.sendToApiSituation;
        data.situationMatrimoniale.id= e.target.value;
        this.setState({
            sendToApiSituation : data
        })
    }
    onSelectPoste(e){
        let data = this.state.sendToApiPoste;
        data.poste.id = e.target.value;
        this.setState({
            sendToApiPoste : data
        })
    }
    onSelectDuree(e){
        let data = this.state.sendToApiSignature;
        data.duree = e.target.value;
        this.setState({
            sendToApiSignature : data
        })
    }
    onSelectTypeContrat(e){
        let data = this.state.sendToApiSignature;
        data.typeContrat.id = e.target.value;
        this.setState({
            sendToApiSignature : data
        })
    }
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
                                    <Form.Control name="pays" value={this.state.dataToSend.pays.id} onChange={(e)=>{this.onSelectPays(e)}} as="select">
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
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ville">
                                    <Form.Label>Statut matrimonial</Form.Label>
                                    <Form.Control name="situationMatrimoniale" value={this.state.sendToApiSituation.situationMatrimoniale.id} onChange={(e)=>{this.onSelectSituation(e)}} as="select">
                                        <option value={-1} disabled={true}>Selectionnez</option>
                                        {
                                            this.state.dataSituation.map((item)=>{
                                                return(
                                                    <option value={item.id}>{item.libelle}</option>
                                                )
                                            })
                                        }
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
                                        <Form.Control name="poste" value={this.state.sendToApiPoste.poste.id} onChange={(e)=>{this.onSelectPoste(e)}} as="select">
                                            <option value={-1} disabled={true}>Selectionnez</option>
                                            {
                                                this.state.dataPoste.map((item)=>{
                                                    return(
                                                        <option value={item.id}>{item.libelle}</option>
                                                    )
                                                })
                                            }
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
                                    <Form.Control type="text" name="salaireBase" value={parseFloat(this.state.sendToApiSignature.salaireBase)} onChange={(e)=>{this.onChangeSignature(e)}} placeholder="0" />
                                </Form.Group>
                                <Row>
                                    <Col>

                                        <Form.Group controlId="exampleForm.Email">
                                            <Form.Label>Type de contrat </Form.Label>
                                            <Form.Control name="typeContrat" value={this.state.sendToApiSignature.typeContrat.id} onChange={(e)=>{this.onSelectTypeContrat(e)}}as="select">
                                                <option value={-1} disabled={true}>Selectionnez</option>
                                                {
                                                    this.state.dataTypeContrat.map((item)=>{
                                                        return(
                                                            <option value={item.id}>{item.libelle}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>

                                        <Form.Group controlId="exampleForm.Email">
                                            <Form.Label>Durée </Form.Label>
                                            <Form.Control name="duree" value={this.state.sendToApiSignature.duree} onChange={(e)=>{this.onSelectDuree(e)}}as="select">
                                                <option>1 mois</option>
                                                <option>3 mois</option>
                                                <option>6 mois</option>
                                                <option>1 ans</option>
                                                <option>2 ans</option>
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
                        <Card.Title as="h5">Informations bancaire</Card.Title>
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

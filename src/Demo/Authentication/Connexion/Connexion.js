import React from 'react';
import {NavLink , Redirect} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import Logo from "../../../assets/images/logo.png"
import {PostData} from "../../../services/api";
import {Form} from "react-bootstrap";

class Connexion extends React.Component {

    state = {
        redirect : false,
        dataToSend:{
            username : "",
            password: "",
            /*groupe : {
                id : ""
            }*/
        },
    }

    login(){
        //alert(JSON.stringify(this.state.dataToSend))
        this.setState({redirect:true})
    }

    onChange(e){
        let data = this.state.dataToSend;
        data[e.target.name] = e.target.value;
        this.setState({
            dataToSend : data
        })
    }

    render () {
        if(this.state.redirect){
            return <Redirect to="/dashboard/default" />
        }
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper bg-connexion   ">
                    <div className="auth-content">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4 row">
                                    <div className="col-8 offset-2">
                                        <img src={Logo} className="logo-connexion img-fluid" alt=""/>
                                    </div>
                                </div>
                                <h3 className="mb-4">Connexion</h3>
                                <div className="input-group mb-3">
                                    <input type="email" value="" className="form-control" name='username' value={this.state.dataToSend.username} onChange={(e)=>{this.onChange(e)}} placeholder="Nom d'utilisateur"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" name='password' value={this.state.dataToSend.password} onChange={(e)=>{this.onChange(e)}} placeholder="Mot de passe"/>
                                </div>
                                <button onClick={()=>{this.login()}} className="btn btn-primary shadow-2 mb-4">Connexion</button>

                                <p className="mb-0 text-muted">Copyright 2020 KODA Sarl &copy; Tous droits réservés</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Connexion;
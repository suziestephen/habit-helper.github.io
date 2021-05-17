import React, { Component } from "react";
import LoginForm from "../components/Login/LoginForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../utils/API";



//login page
class Login extends React.Component {

    render(){
    return (
    
        <div>
            <LoginForm setIsAuthenticated={this.props.setIsAuthenticated}/>
        </div>
        
        )
    
    }
}

export default Login;
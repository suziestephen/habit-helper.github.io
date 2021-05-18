import React, { Component } from "react";
import LoginForm from "../components/Login/LoginForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../utils/API";



//login page
class Login extends Component {

    render(){
    return (
    
        <div>
            <LoginForm />
            {/* <LoginForm setIsAuthenticated={this.props.setIsAuthenticated}/> */}
        </div>
        
        )
    
    }
}

export default Login;
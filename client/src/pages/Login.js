import React, { Component } from "react";
import LoginForm from "../components/Login/LoginForm";




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
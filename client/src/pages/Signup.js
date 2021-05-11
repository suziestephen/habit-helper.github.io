import React, { Component } from "react";
import SignupForm from "../components/Signup/SignupForm";
import API from "../utils/API";



//saved entries - register and save to database 
class Signup extends React.Component {
    render(){
        return (
        
            <div>
                <SignupForm />
            </div>
            
            )
        
        }
}

export default Signup;
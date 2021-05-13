


      
      

import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button } from "react-bootstrap";
// import "./reading.css"



class LoginForm extends Component {

  state = {
      email: "",
      password: "",
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    API.getUser({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <div className="signup-container">
        <h2>Login to view the site</h2>
      <br />
        <Form className="signup-form">
          <label>
              <input 
                name="email"
                placeholder='Your Email' 
                value={this.state.email} 
                onChange={e => this.change(e)}
              />
            </label>
          <br />
          <label>
              <input 
                name="password"
                placeholder='Your Password' 
                value={this.state.password} 
                onChange={e => this.change(e)}
              />
            </label>
        </Form>
      </div>
      );
    }

  }

export default LoginForm;








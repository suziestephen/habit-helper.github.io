import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button } from "react-bootstrap";
import "./loginform.css"
import { Redirect, Link, useHistory } from 'react-router-dom';

//react proxy 
  
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

        //  //auth.login
        // onSubmit = (e) => {
        //     e.preventDefault();
        //     console.log('handleSubmit');
        //     //this.props.login(this.state.email, this.state.password);
        //     Auth.login({
        //         email: this.state.email,
        //         password: this.state.password
        //     }).then(response => {
        //         console.log(response);
        //           this.props.history.push('/'); 
        //     });
        // }


  onSubmit = e => {
    e.preventDefault();
    API.getUser({ //auth.login ?? //this is the link to the user table to confirm
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <div className="display-container">
        <h2>Login to view the site</h2>
      <br />
        <Form className="form">
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

            <br></br>
            <Button className="button-1" onClick={this.onSubmit}>Login</Button>
            <Button className="button-2"> 
              <Link to="/signup" float="middle">Not a user? Signup here first</Link> 
            </Button>
        </Form>
      </div>
      );
    }

  }

export default LoginForm;





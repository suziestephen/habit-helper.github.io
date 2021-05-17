import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button } from "react-bootstrap";
import "./signupform.css"



class SignupForm extends Component {

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
    API.saveSignup({
      email: this.state.email,
      password: this.state.password,
    })
    .then( () => {
      // props.updateAuth()
      window.alert ("Signup Successful!");
      window.location.href="/Homepage"
    })
  };




  render() {
    return (
      <div className="display-container">
        <h2>Signup to get started</h2>
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
          <br />
          <br />
            <Button type="reset" onClick={e => this.onSubmit(e)}>Submit</Button>
        </Form>
      </div>
      );
    }

  }

export default SignupForm;








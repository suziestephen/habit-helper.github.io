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
        //     API.login({
        //         email: this.state.email,
        //         password: this.state.password
        //     }).then(response => {
        //         console.log(response);
        //           this.props.history.push('/'); 
        //     });
        // }


  onSubmit = e => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
    API.login({ //this link does not work
      email: this.state.email,
      password: this.state.password,
    })
//         .then(response => {
//           console.log("response: ", response);
//           console.log("RESPONSE.DATA.ID: ", response.data.data.id)
//         if (response.data.data.id) {
//           setUserId(response.data.data.id);
//           history.push('/');
//         } else {
//           setHasErrorState(true);
//         }
//       })
//       .catch(err => {
//         setState({
//           email: "",
//           password: ""
//         });
//         setHasErrorState(true);
//         console.log(err);
//       }
//       )
// }

  }
}

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





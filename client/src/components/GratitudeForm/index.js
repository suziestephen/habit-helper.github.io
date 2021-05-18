import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button } from "react-bootstrap";
import "./gratefulform.css"



class GratitudeForm extends Component {

  state = {
      gratefulFor: "",
      dayOf: "",
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    API.saveGratitude({
      gratefulFor: this.state.gratefulFor,
      dayOf: this.state.dayOf,
    });
    this.setState({gratefulFor:"", dayOf: ""})
    window.alert ("Entry Submitted!");
  };

  render() {
    return (
      <div className="display-container">
        <h2>Write down some things you were grateful for today....</h2>
        <br />
        <Form className="form">
              <input 
                className="gratefulFor"
                name="gratefulFor"
                placeholder='Today I was grateful for...' 
                value={this.state.gratefulFor} 
                onChange={e => this.change(e)}
              />
            <br />
              <input 
                name="dayOf"
                placeholder='YYYY/MM/DD' 
                value={this.state.dayOf} 
                onChange={e => this.change(e)}
              />
            <br />
          <Button onClick={e => this.onSubmit(e)}>Submit</Button>
        </Form>
      </div>
      );
    }

  }

export default GratitudeForm;








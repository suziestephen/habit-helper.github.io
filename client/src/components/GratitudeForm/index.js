import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button } from "react-bootstrap";




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
      <div className="entry-container">
         <div className="entry-heading">
            Write down some things you were grateful for today....
          </div>
        <br />
        <Form className="form">
          <label>
              <input 
                className="entry-field"
                name="gratefulFor"
                placeholder='Today I was grateful for...' 
                value={this.state.gratefulFor} 
                onChange={e => this.change(e)}
              />
          </label>
            <br />
          <label>
              <input 
                className="entry-field-sm"
                name="dayOf"
                placeholder='YYYY/MM/DD' 
                value={this.state.dayOf} 
                onChange={e => this.change(e)}
              />
          </label>
            <br />
          <Button variant="outline-info" onClick={e => this.onSubmit(e)}>Submit</Button>
        </Form>
      </div>
      );
    }

  }

export default GratitudeForm;








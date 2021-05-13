import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
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
  };

  render() {
    return (
      
      <div className="entry-container">
        <h2>Write down some things you were grateful for today....</h2>
        <br />
        <Form className="entry-form">
        <label>
              <input 
                className="gratefulFor"
                name="gratefulFor"
                placeholder='Today I was grateful for...' 
                value={this.state.gratefulFor} 
                onChange={e => this.change(e)}
              />
            </label>
            <br />

            <label>
              <input 
                name="dayOf"
                placeholder='YYYY/MM/DD' 
                value={this.state.dayOf} 
                onChange={e => this.change(e)}
              />
            </label>
            <br />
          <Button div className="entry-button" onClick={e => this.onSubmit(e)}>Submit</Button>
        </Form>
      </div>
      );
    }

  }

export default GratitudeForm;








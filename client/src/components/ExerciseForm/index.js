import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button } from "react-bootstrap";




class ExerciseForm extends Component {

  state = {
      exercise: "",
      located: "",
      dayOf: "",
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    API.saveExercise({
      exercise: this.state.exercise,
      located: this.state.located,
      dayOf: this.state.dayOf,
    });
    this.setState({exercise:"", located: "", dayOf: ""})
    window.alert ("Entry Submitted!");
  };

  render() {
    return (
      <div className="entry-container">
          <div className="entry-heading">
             Did you workout today?
        </div>
      <br />
        <Form className="form">
          <label>
            <input 
              className="entry-field-sm"
              name="exercise"
              placeholder='What was your sweat sesh today?' 
              value={this.state.exercise} 
              onChange={e => this.change(e)}
            />
          </label>
          <br />
          <label>
            <input 
              className="entry-field-sm"
              name="located"
              placeholder='Where did you workout?' 
              value={this.state.located} 
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
            <Button variant="outline-info" onClick={e => this.onSubmit(e)} >Submit</Button>
        </Form>
      </div>
      );
    }

  }

export default ExerciseForm;








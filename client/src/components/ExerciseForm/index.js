import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./exercise.css"



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
  };

  render() {
    return (
      <div className="entry-container">
        <h2>Write down your exercise for the day</h2>
      <br />
        <Form className="entry-form">
            <input 
              name="exercise"
              placeholder='What was your sweat sesh today?' 
              value={this.state.exercise} 
              onChange={e => this.change(e)}
            />
          <br />
            <input 
              name="located"
              placeholder='Where did you workout?' 
              value={this.state.located} 
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

export default ExerciseForm;








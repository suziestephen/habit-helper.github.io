import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./reading.css"



class ReadingForm extends Component {

  state = {
      book: "",
      pages: "",
      dayOf: "",
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    API.saveReading({
      book: this.state.book,
      pages: this.state.pages,
      dayOf: this.state.dayOf,
    });
  };

  render() {
    return (
      <div className="entry-container">
        <h2>What are you reading at the moment?</h2>
      <br />
        <Form className="entry-form">
          <label>
              <input 
                name="book"
                placeholder='Book title' 
                value={this.state.book} 
                onChange={e => this.change(e)}
              />
            </label>
          <br />
          <label>
              <input 
                name="pages"
                placeholder='Number of pages' 
                value={this.state.pages} 
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
            <Button onClick={e => this.onSubmit(e)}>Submit</Button>
        </Form>
      </div>
      );
    }

  }

export default ReadingForm;








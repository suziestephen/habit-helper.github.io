import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Button } from "react-bootstrap";



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
    this.setState({book:"", pages: "", dayOf: ""})
    window.alert ("Entry Submitted!");
  };

  render() {
    return (
      <div className="entry-container">
         <div className="entry-heading">
             What are you reading at the moment?
        </div>
      <br />
        <Form className="entry-form">
          <label>
              <input 
                className="entry-field-sm"
                name="book"
                placeholder='Book title' 
                value={this.state.book} 
                onChange={e => this.change(e)}
              />
            </label>
          <br />
          <label>
              <input 
                className="entry-field-sm"
                name="pages"
                placeholder='Number of pages' 
                value={this.state.pages} 
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

export default ReadingForm;








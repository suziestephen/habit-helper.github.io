import React, { Component } from "react";
import API from '../../utils/API';



class CreateGratitudeForm extends Component {

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
      <form>
        <input 
        name="gratefulFor"
        placeholder='Grateful For' 
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
      <button onClick={e => this.onSubmit(e)}>Submit</button>

  
      </form>
      );
    }

  }

export default CreateGratitudeForm;








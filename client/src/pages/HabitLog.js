import React, { Component } from "react";
import API from "../utils/API";
import { Form } from "react-bootstrap";
import DisplayHabits from "../components/DisplayHabits/DisplayHabits";
// import { Col, Row, Container } from "../components/Grid";

class HabitLog extends Component {
  
  state = {
    getEntries: [],
  }

  componentDidMount() {
    API.getEntries()
      .then(getEntries => this.setState({ getEntries: getEntries}))
      .catch(err => console.error(err));
  }



  render() {
    return (
      <div>
          <h3>Your Entries</h3>
        <DisplayHabits entries={this.state.getEntries} />
      </div>
      )
    }
  }


export default HabitLog;

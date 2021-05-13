import React, { Component } from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
// import DisplayHabits from "../components/DisplayHabits/DisplayHabits";
import EntryDetail from "../components/EntryDetail"
// import { Col, Row, Container } from "../components/Grid";

class HabitLog extends Component {

  state = {
    result: [],
  };


  componentDidMount() {
    API.getGratitude() 
    .then (res => {
      console.log(res.data)
      this.setState ({ result: res.data })
    })
    .catch(err => console.error(err)
    )
};

  renderEntry() {
      return <EntryDetail
        gratefulfor={this.state.result.gratefulFor}
        dayOf={this.state.result.dayOf}
      />
    }

  render() {
    return (
      <Card>
      {this.renderEntry()}
    </Card>
      )
    }
  }
  

export default HabitLog;

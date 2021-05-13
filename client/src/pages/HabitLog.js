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

  renderEntry(entry) {
      return <EntryDetail
        gratefulFor={entry.gratefulFor}
        dayOf={entry.dayOf}
      />
    }

  render() {

    return (
      <div>
      {this.state.result.map(entry =>  
        <Card key={entry.id}>
          
          {this.renderEntry(entry)}
        </Card>
       )
      }
       </div>
    )
  }
}

export default HabitLog;

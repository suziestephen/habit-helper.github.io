import React, { Component } from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
// import DisplayHabits from "../components/DisplayHabits/DisplayHabits";
import GratitudeDisplay from "../components/GratitudeDisplay.js"
import ExerciseDisplay from "../components/ExerciseDisplay"
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

  renderEntry(gratitude) {
      return <GratitudeDisplay
        gratefulFor={gratitude.gratefulFor}
        dayOf={gratitude.dayOf}
      />
    }

    renderEntry(exercise) {
      return <ExerciseDisplay
        exercise={exercise.exercise}
        located={exercise.located}
        dayOf={exercise.dayOf}
      />
    }

  render() {

    return (
    <div>
      <div className="gratitude-display">
      {this.state.result.map(gratitude =>  
        <Card key={gratitude.id}>
          {this.renderEntry(gratitude)}
        </Card>
       )
      }
      </div>

      {/* <div>
      {this.state.result.map()}
       </div> */}

    </div>
    )}
}

export default HabitLog;

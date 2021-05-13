import React, { Component } from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
import ExerciseDisplay from "../components/ExerciseDisplay"
import TopMenu from "../components/TopMenu/index"


class ExerciseLog extends Component {

  state = {
    result: [],
  };


componentDidMount() {
  API.getExercise() 
  .then (res => {
    console.log(res.data)
    this.setState ({ result: res.data })
  })
  .catch(err => console.error(err)
  )
};

  renderExercise(exercise) {
      return <ExerciseDisplay
        exercise={exercise.exercise}
        located={exercise.located}
        dayOf={exercise.dayOf}
      />
    }



  render() {

    return (
      <div>
          <TopMenu />
        <div className="exercise-display">
          {this.state.result.map(exercise =>  
            <Card key={exercise.id}>
              {this.renderExercise(exercise)}
            </Card>
                )}
          </div>

       </div>
    )
  }
}

export default ExerciseLog;

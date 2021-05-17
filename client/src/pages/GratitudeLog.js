import React, { Component } from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
import GratitudeDisplay from "../components/GratitudeDisplay"
import TopMenu from "../components/TopMenu/index";
import { DateTime } from "luxon";


class GratitudeLog extends Component {

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

renderGratitude(gratitude) {
     //Luxon date:time
     const date = DateTime.fromISO(gratitude.dayOf)
     const formattedDayOf = date.toLocaleString(DateTime.DATE_MED);
 
  return <GratitudeDisplay
    gratefulFor={gratitude.gratefulFor}
    dayOf={formattedDayOf}
  />
}



  render() {

    return (
      <div>
        <TopMenu />
        <div className="gratitude-display">
          {this.state.result.map(gratitude =>  
            <Card key={gratitude.id}>
              {this.renderGratitude(gratitude)}
            </Card>
                )}
          </div>
       </div>
    )}
}

export default GratitudeLog;

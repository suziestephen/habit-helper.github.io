import React, { Component } from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
import ReadingDisplay from "../ReadingDisplay/ReadingDisplay";
import TopMenu from "../components/TopMenu/index";
import { DateTime } from "luxon";


class ReadingLog extends Component {


 state = {
    result: [],
  };

  componentDidMount() {
      API.getReading() 
      .then (res => {
        console.log(res.data)
        this.setState ({ result: res.data })
      })
      .catch(err => console.error(err)
      )
    };

      renderReading(reading) {
        //Luxon date:time
     const date = DateTime.fromISO(reading.dayOf)
     const formattedDayOf = date.toLocaleString(DateTime.DATE_MED);
 
          return <ReadingDisplay
            book={reading.book}
            pages={reading.pages}
            dayOf={formattedDayOf}
          />
        }

    render(){
        return(

        <div>
            <TopMenu />
            <div className="reading-display">
                {this.state.result.map(reading =>  
                <Card key={reading.id}>
                    {this.renderReading(reading)}
                </Card>
                    )}
            </div> 
     </div>
    )}
}

export default ReadingLog;

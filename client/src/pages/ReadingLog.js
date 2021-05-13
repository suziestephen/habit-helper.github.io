import React, { Component } from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
import ReadingDisplay from "../components/ReadingDisplay"
import TopMenu from "../components/TopMenu/index"


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
          return <ReadingDisplay
            book={reading.book}
            pages={reading.pages}
            dayOf={reading.dayOf}
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

import React, { Component } from "react";
import API from '../../utils/API';

class Entries extends Component {

    state = {
      entries: [],
    }
  
    componentDidMount() {
      API.getEntries()
          .then(showEntries => this.setState({ showEntries: showEntries }))
          .catch(err => console.error(err));
  }
  
  
  
        render() {
          return (
              <div>
                {this.props.entries.map(result => (
                  <div className="card mb-3" key={result._id}>
                      <h5 className="card-title">{result.id}</h5>
                  </div>
                ))}
              </div>
          )}
  
      }
  
      export default Entries;
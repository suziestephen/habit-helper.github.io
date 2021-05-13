import React, { Component } from "react";
import API from '../../utils/API';
import { Container, Row, Col } from "react-bootstrap";
// import "./displayhabits.css"



class DisplayHabits extends Component {

    state = {
      value: "",
      entries: []
    }
  

    componentDidMount() {
      this.getEntries();
      // API.getEntries()
      //     .then(getEntries => this.setState({ getEntries: getEntries }))
      //     .catch(err => console.error(err));
  }

      displayEntry = entryData => {
      return {
        _id: entryData.id,
        gratefulFor: entryData.gratefulFor,
        exercise: entryData.exercise,
        located: entryData.located,
        book: entryData.book,
        pages: entryData.pages,
        dayOf: entryData.dayOf,
      }
    }

    getEntries = query => {
    API.getEntries(query)
        .then(res => this.setState ({ entries: res.data.items.map(entryData => this.displayEntry(entryData)) }))
        .catch(err => console.error(err));
    };

  render() {
    return (
        <div>

                <h5 className="card-title">

                </h5>
            </div>

    )}

}
export default DisplayHabits;




              







//     state = {
// //  ??
//     }


    // render (){
    //     const dataMySQL = this.state.map((item, index)=>{
    //         var entries = ['gratefulFor: ', item.gratefulFor,', dayOf: ', item.dayOf,].join(' ');
    //         return <p key={index}>{entries}</p>;
    //       })
    // return (
    //   <div className="display-container">
    //     <h2>Your Habit Log</h2>
    //     { dataMySQL }

    //   </div>
    // )
//   }
// }





// constructor() {
//     super();
//     this.state = 
//     {
//       id: props.id,
//       gratefulFor: "",
//       dayOf: "",
//     };
//   }

//   componentDidMount() {
//     API.getGratitude({
//       gratefulFor: this.state.gratefulFor,
//       dayOf: this.state.dayOf,
//     });
//   }
        
      
  

// render() {
//   let filteredWatches = this.state.allwatches.filter((watche) => {
//       return watche.name.indexOf(this.props.filterText) > -1;
//   });
//   return (
//       <div>
//       { 
//           filteredWatches.map(
//               (product) => {
//               return <Watche name={product.name} price={product.price} image={product.image} />
//           })
//       } 
//       </div>
//   ); 

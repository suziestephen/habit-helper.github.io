import React, { Component } from "react";
import API from '../../utils/API';
import { Container, Row, Col } from "react-bootstrap";
// import "./displayhabits.css"



class DisplayHabits extends Component {

  constructor() {
    super();

    this.state = {
      entries: [],
    }
  }

render() {

  API.getEntries({
    entries: this.state.entries,
  });
  
  return (
    <div>
      <Entries entries={this.state.entries} />
    </div>
  );
}
}


const Entries = ({ entries }) => <h1>{entries}</h1>;
 
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


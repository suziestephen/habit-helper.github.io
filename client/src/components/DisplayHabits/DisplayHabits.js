import React, { Component } from "react";
import API from '../../utils/API';
import { Button, Container, Row, Col } from "react-bootstrap";
// import "./displayhabits.css"



class DisplayHabits extends Component {
    state = {
        gratefulFor: "",
        dayOf: "",
    }


    render (){
        const dataMySQL = this.state.gratitude.map((item, index)=>{
            var gratitude = ['gratefulFor: ', item.gratefulFor,', dayOf: ', item.dayOf,].join(' ');
            return <p key={index}>{gratitude}</p>;
          })
    return (
      <div className="display-container">
        <h2>Your Habit Log</h2>
        { dataMySQL }

      </div>
    )


  }
}

export default DisplayHabits;





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


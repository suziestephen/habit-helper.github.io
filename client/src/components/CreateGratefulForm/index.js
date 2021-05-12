import React, { Component } from "react";
// import { useStoreContext } from '../../utils/GlobalState';
// import { ADD_GRATITUDE, LOADING } from '../../utils/action';
import API from '../../utils/API';



class CreateGratitudeForm extends Component {

  state = {
      gratefulFor: "",
      dayOf: "",
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      gratefulFor: "",
      dayOf: "",
    })
  };

  render() {
    return (
      <form>
        <input 
        name="gratefulFor"
        placeholder='Grateful For' 
        value={this.state.gratefulFor} 
        onChange={e => this.change(e)}
        />
        <br />
        <input 
        name="dayOf"
        placeholder='YYYY/MM/DD' 
        value={this.state.dayOf} 
        onChange={e => this.change(e)}
        />
      <button onClick={e => this.onSubmit()}>Submit</button>

  
      </form>
      );
    }

  }

export default CreateGratitudeForm;










//   //set state of saved books (variable: function)
//   componentDidMount() {
//       API.saveGratitude()
//           .then(saveGratitude => this.setState({ saveGratitude: saveGratitude }))
//           .catch(err => console.error(err));
//   }


//     handleSubmit = gratitude => {
//           API.saveGratitude(gratitude)
//               .then(saveGratitude => this.setState({ saveGratitude: this.state.saveGratitude.concat([saveGratitude]) }))
//               .catch(err => console.error(err));
//       }
//     }

//   render() 
//   return (
//     <div>
//       <div className="header">
//       </div>
//       <h1>What are you grateful for today</h1>

//     </div>
//   )
//   };


// export default CreateGratitudeForm;





  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: LOADING });
  //   API.saveGratitude({
  //     gratefulFor: gratefulForRef.current.value,
  //     dayOf: dayOfRef.current.value,
  //   })
  //     .then((result) => {
  //       dispatch({
  //         type: ADD_GRATITUDE,
  //         post: result.data,
  //       });
  //     })
  //     .catch((err) => console.log(err));

  //   gratefulForRef.current.value = '';
  //   dayOfRef.current.value = '';
  // };


//   <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
//   <label htmlFor="gratefulFor">Grateful For:</label>
//   <input
//     className="form-control mb-5"
//     required
//     // ref={gratefulForRef}
//     id="gratefulFor"
//     placeholder="grateful for"
//   />
//   <label htmlFor="body">Date:</label>
//   <textarea
//     className="form-control mb-5"
//     required
//     // ref={dateRef}
//     id="dayOf"
//     placeholder="YYYY/MM/DD"
//   />
//   <button
//     className="btn btn-success mt-3 mb-5"
//     type="submit"
//   >
//     Save Entry
//   </button>
// </form>
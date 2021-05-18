import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API"
import { AuthContext } from "../../utils/authContext";
import { Form, Button } from "react-bootstrap";

function Login() {
  // This allows us to set the user's authentication state in the context object
  const { setIsAuthenticated } = useContext(AuthContext);

  // State object to store everything from our form
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const [hasErrorState, setHasErrorState] = useState(false);

  // history hook to use for navigating the user
  const history = useHistory();

  // if a value in the form changes, we update the state object above
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value.trim() })
  };

  // handle form submit button clicked
  function handleFormSubmit(e) {
    e.preventDefault(); // Avoid reloading page (which is default behaviour upon submit for a form)
    setHasErrorState(false);
    if (formState.email && formState.password) { // Was email and password entered?
      // We make the API call, and if there's a returned object from the server we navigate the user back to the root level and set the context
      API.userLogin({
        email: formState.email,
        password: formState.password
      })
        .then(response => {
          if (response.data.id) {
            setIsAuthenticated(true);
            history.push('/');
          } else {
            setHasErrorState(true);
          }
        })
        .catch(err => {
          setFormState({
            email: "",
            password: ""
          });
          setHasErrorState(true);
          console.log(err);
        }
        );
    }
  }

  return (
      <div className="display-container">
            <div className="entry-heading">
              Login to view the site
            </div>
            <br />
          <Form className="form" >
       
            <input

              type="email"
              onChange={handleInputChange}
              name="email"
              label="Email"
              placeholder="Email (required)"
              value={formState.email}
            />
    
            <br />
  
          <label>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              label="Password"
              placeholder="Password (required)"
              value={formState.password}
            />
          </label>
            <br />

            <Button size="sm"
                disabled={!(formState.email && formState.password)}
                onClick={handleFormSubmit}
              >
                Log in
              </Button>
                
            { hasErrorState ? <strong>Invalid details, try again</strong> : '' }

            <Button size="sm" variant="outline-secondary">
              
              Not a user? Signup here first
              <Link to="/signup" float="middle"></Link> 
            </Button>
     
          </Form>
      </div>
  );
}

export default Login;






// import React, { Component } from "react";
// import API from '../../utils/API';
// import { Form, Button } from "react-bootstrap";
// import "./loginform.css"
// import { Redirect, Link, useHistory } from 'react-router-dom';

// //react proxy 
  
//   class LoginForm extends Component {




//   state = {
//       email: "",
//       password: "",
//   }

//   change = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };



//   onSubmit = e => {
//     e.preventDefault();
//     if (this.state.email && this.state.password) {
//     API.login({ 
//       email: this.state.email,
//       password: this.state.password,
//     })
//         .then(response => {
//           this.props.setIsAuthenticated(true)
//           console.log("response: ", response);
//       })


//   }
// }

//   render() {
//     return (
//       <div className="display-container">
//         <h2>Login to view the site</h2>
//       <br />
//         <Form className="form">
//           <label>
//               <input 
//                 name="email"
//                 placeholder='Your Email' 
//                 value={this.state.email} 
//                 onChange={e => this.change(e)}
//               />
//             </label>
//           <br />
//           <label>
//               <input 
//                 name="password"
//                 placeholder='Your Password' 
//                 value={this.state.password} 
//                 onChange={e => this.change(e)}
//               />
//             </label>

//             <br></br>
//             <Button className="button-1" onClick={this.onSubmit}>Login</Button>
//             <Button className="button-2"> 
//               <Link to="/signup" float="middle">Not a user? Signup here first</Link> 
//             </Button>
//         </Form>
//       </div>
//       );
//     }

//   }

// export default LoginForm;





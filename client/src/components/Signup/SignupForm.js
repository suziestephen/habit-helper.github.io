import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Form, Button } from "react-bootstrap";


function SignUp(){
    let history = useHistory();

    const [formState, setFormState] = useState({
        email: "",
        password: ""
      })
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value.trim()})
    };

    function handleFormSubmit(e) {
        e.preventDefault();
        if(formState.email && formState.password) {
            API.userSignup({
                email: formState.email,
                password: formState.password
              })
                .then((res) => {

                  if(res.status === 200){
                      history.push("/");
                  }
              })
              .catch(err => console.log(err));
        
        }
    }
    
    return (
            <Form>
            <input type="text"
                onChange={handleInputChange}
                name="email"
                label="Email"
                placeholder="Email (required)"
                required
                value={formState.email}
            />
            <input type="password"
                onChange={handleInputChange}
                name="password"
                label="Password"
                placeholder="Password (required)"
                required
                value={formState.password}
            />
            <Button className="button-1"
                disabled={!(formState.email && formState.password)}
                onClick={handleFormSubmit}
            >
                Create account
            </Button>
          </Form>
    );
}

export default SignUp;













// import React, { Component } from "react";
// import API from '../../utils/API';
// import { Form, Button } from "react-bootstrap";
// import "./signupform.css"



// class SignupForm extends Component {

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
//     API.saveSignup({
//       email: this.state.email,
//       password: this.state.password,
//     })
//     .then( () => {
//       window.alert ("Signup Successful!");
//       window.location.href="/Homepage"
//     })
//   };




//   render() {
//     return (
//       <div className="display-container">
//         <h2>Signup to get started</h2>
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
//           <br />
//           <br />
//             <Button type="reset" onClick={e => this.onSubmit(e)}>Submit</Button>
//         </Form>
//       </div>
//       );
//     }

//   }

// export default SignupForm;








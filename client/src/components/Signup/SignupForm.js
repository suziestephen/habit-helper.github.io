import React from "react";
import "./signupform.css";

const SignupForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

//   makeUser = userData => {
//     return {
//         firstName: userData.firstName,
//         surname: userData.surname,
//         dob: userData.dob,
//         email: userData.email,
//         password: userData.password,
//     }
// }


        return (
          <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <textarea className="form-control mb-5" required placeholder="First Name" />
          <textarea className="form-control mb-5" required placeholder="Surname" />
          <textarea className="form-control mb-5" required placeholder="Date of Birth" />
          <input className="form-control mb-5" required placeholder="Email" />
          <textarea className="form-control mb-5" required placeholder="Password" />
          <button className="btn btn-success mt-3 mb-5" type="submit">
            Signup
          </button>
        </form>
  
        );
      }


      
      

export default SignupForm;
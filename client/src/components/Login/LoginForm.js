import React from "react";
import "./loginform.css";

const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };


        return (
          <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <input className="form-control mb-5" required placeholder="Email" />
          <textarea className="form-control mb-5" required placeholder="Password" />
          <button className="btn btn-success mt-3 mb-5" type="submit">
            Login
          </button>
        </form>
  
        );
      }


      
      

export default LoginForm;
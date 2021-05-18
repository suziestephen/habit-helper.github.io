import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"



function Logout() {
    const history = useHistory();
    function logOut() {
      API.userLogout();
      history.go(0); 
    }
  
    return <div>You're logged in!<button type="button" onClick={logOut}>
      Logout
   </button></div>;
  }

  export default Logout;
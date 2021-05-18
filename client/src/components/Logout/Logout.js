import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import API from "../../utils/API"



function Logout() {
    const history = useHistory();
    function logOut() {
      API.userLogout();
      history.go(0); 
    }
  
    return <div>You're logged in!
    <Button size="sm" variant="outline-secondary" onClick={logOut}>
      Logout
   </Button></div>;
  }

  export default Logout;
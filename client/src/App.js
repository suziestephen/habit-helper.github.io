import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Login/LoginForm"
import Homepage from "./pages/Homepage";
import HabitLog from "./pages/HabitLog";
import Login from "./pages/Login";

import "./app.css"
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gratitude from "./pages/Gratitude";
import Exercise from "./pages/Exercise";
import Reading from "./pages/Reading";
import GratitudeLog from "./pages/GratitudeLog";
import ExerciseLog from "./pages/ExerciseLog";
import ReadingLog from "./pages/ReadingLog";
import { AuthContext } from "./utils/authContext";
import API from "./utils/API";




const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated 
    ? <Component {...props} />
    : <Redirect to={{
      pathname: '/login',
      state: { from : props.location }
    }} />
  )} />
)

// const AuthButton = withRouter(({ history }) => (
//   isAuthenticated
//   ? 
//   <p>
//     Welcome! <button onClick={() => {
//     isAuthenticated.signout(() => history.push('/'))
//     }}> Sign Out 
//     </button>
//   </p>
//   : 
//   <p>You are not logged in</p>
// ))




function App () {

  
  const [isAuthenticated, setIsAuthenticated ] = useState(false);
  const value = { isAuthenticated, setIsAuthenticated };
  
  // We check if user is already logged in, and if they are then we set isAuthenticated to true
  useEffect(() => {
    API.userLoggedIn().then(response => {
      console.log(response.data)
      setIsAuthenticated(response.data.isAuthenticated)
      // if (isAuthenticated){window.location.href="/Homepage"};
    })
  }, []);

  //App function

  return (
<AuthContext.Provider value={value}>
  <Router>
        <div className ="main-div">

            <NavBar />
            <Header />

            <Switch>
                  <Route exact path='/Signup'>
                    <Signup />
                  </Route>

                  <Route exact path='/Login'>


                  {/* // render={(props) => (
                  //         <Login {...props} setIsAuthenticated={setIsAuthenticated} />
                  //      )} */}
                    <Login />
                  </Route>
               
                    
                    <Route path='/' />
                      {isAuthenticated ? (
                      <div>
                        <PrivateRoute path='/Homepage' component={Homepage} isAuthenticated={isAuthenticated} /> 
                        <PrivateRoute path='/HabitLog' component={HabitLog} isAuthenticated={isAuthenticated} /> 
                            <PrivateRoute exact path="/Gratitude" component={Gratitude} isAuthenticated={isAuthenticated}/> 
                            <PrivateRoute exact path="/Exercise" component={Exercise} isAuthenticated={isAuthenticated} /> 
                            <PrivateRoute exact path="/Reading" component={Reading} isAuthenticated={isAuthenticated}/> 
                            <PrivateRoute exact path="/GratitudeLog" component={GratitudeLog} isAuthenticated={isAuthenticated} /> 
                            <PrivateRoute exact path="/ExerciseLog" component={ExerciseLog} isAuthenticated={isAuthenticated}/> 
                            <PrivateRoute exact path="/ReadingLog" component={ReadingLog} isAuthenticated={isAuthenticated} /> 
                       </div> 
                      )
                      : <Login />
                      }
             

              </Switch> 
            <Footer />
        </div>
    </Router>
  </AuthContext.Provider>
  )}
    




export default App;



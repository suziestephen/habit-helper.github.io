import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import HabitLog from "./pages/HabitLog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gratitude from "./pages/Gratitude";
import Exercise from "./pages/Exercise";
import Reading from "./pages/Reading";
import GratitudeLog from "./pages/GratitudeLog";
import ExerciseLog from "./pages/ExerciseLog";
import ReadingLog from "./pages/ReadingLog";
import { AuthContext } from "./utils/authContext";
import API from "./utils/API";
import "./app.css"




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




function App () {

  
  const [isAuthenticated, setIsAuthenticated ] = useState(false);
  const value = { isAuthenticated, setIsAuthenticated };
  
  // We check if user is already logged in, and if they are then we set isAuthenticated to true
  useEffect(() => {
    API.userLoggedIn().then(response => {
      console.log(response.data)
      setIsAuthenticated(response.data.isAuthenticated)
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
                    <Login />
                  </Route>  
                    <Route path='/' />
                      {isAuthenticated ? (
                      <div>
                         <Switch>
                        <PrivateRoute path='/' component={Homepage} isAuthenticated={isAuthenticated} /> 
                        <PrivateRoute path='/Homepage' component={Homepage} isAuthenticated={isAuthenticated} /> 
                        <PrivateRoute path='/HabitLog' component={HabitLog} isAuthenticated={isAuthenticated} /> 
                            <PrivateRoute exact path="/Gratitude" component={Gratitude} isAuthenticated={isAuthenticated}/> 
                            <PrivateRoute exact path="/Exercise" component={Exercise} isAuthenticated={isAuthenticated} /> 
                            <PrivateRoute exact path="/Reading" component={Reading} isAuthenticated={isAuthenticated}/> 
                            <PrivateRoute exact path="/GratitudeLog" component={GratitudeLog} isAuthenticated={isAuthenticated} /> 
                            <PrivateRoute exact path="/ExerciseLog" component={ExerciseLog} isAuthenticated={isAuthenticated}/> 
                            <PrivateRoute exact path="/ReadingLog" component={ReadingLog} isAuthenticated={isAuthenticated} /> 
                          </Switch> 
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



import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Login/LoginForm"
import Homepage from "./pages/Homepage";
import HabitLog from "./pages/HabitLog";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gratitude from "./pages/Gratitude";
import Exercise from "./pages/Exercise";
import Reading from "./pages/Reading";
import GratitudeLog from "./pages/GratitudeLog";
import ExerciseLog from "./pages/ExerciseLog";
import ReadingLog from "./pages/ReadingLog";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


class Login extends Component {
  state = {
    redirectToRefferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToRefferrer: true
      }))
    })
  }
  render() {
    const { redirectToRefferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname : '/'} }

    if (redirectToRefferrer === true) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div> 
        <LoginForm />
        <button onClick={this.login}>Log In</button>
      </div>
    )

  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to={{
      pathname: '/login',
      state: { from : props.location }
    }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated === true 
  ? 
  <p>
    Welcome! <button onClick={() => {
    fakeAuth.signout(() => history.push('/'))
    }}> Sign Out 
    </button>
  </p>
  : 
  <p>You are not logged in</p>
))


class App extends Component {

  state={isAuthenticated : false}

  updateAuth=() => {
  this.setState({isAuthenticated : true})
  }

  render () {
  return (
    <Router>
        <AuthButton />
            <ul>
            <li><Link to='/login'>Login Page</Link></li>
            <li><Link to='/signup'>SignUp Page</Link></li>
            </ul>

          <NavBar />
          <Header />
          <div>
 
          <Route path='/' component={Login} />
          <Route path='/Signup' 
              render={(props) => (
                  <Signup {...props} updateAuth={true} />
              )}
          />


          <PrivateRoute path='/Homepage' component={Homepage} />
          <PrivateRoute path='/HabitLog' component={HabitLog} />
          <Switch>
              <Route exact path="/Gratitude" component={Gratitude} />
              <Route exact path="/Exercise" component={Exercise} />
              <Route exact path="/Reading" component={Reading} />
              <Route exact path="/GratitudeLog" component={GratitudeLog} />
              <Route exact path="/ExerciseLog" component={ExerciseLog} />
              <Route exact path="/ReadingLog" component={ReadingLog} />
            </Switch> 
          <Footer />
          </div>
          </Router>
  )}
}      




export default App;




{/* 
          
 
      </Wrapper>
    </Router>
  ); */} 
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Login/LoginForm"
import Homepage from "./pages/Homepage";
import Gratitude from "./pages/Gratitude";
import Exercise from "./pages/Exercise";
import Reading from "./pages/Reading";
import HabitLog from "./pages/HabitLog";

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

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Homepage</h3>  // this components will only show if logged in

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
        <p>You must log in to view this page</p>
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
  render () {
  return (
    <Router>

          <NavBar />
          <Header />
          <div>
          <AuthButton />
            <ul>
            <li><Link to='/login'>Login Page</Link></li>
            <li><Link to='/homepage'>Homepage</Link></li>
            </ul>

          

          <Route path='/' component={Login} />
          {/* <Route path='/login' component={Login} /> */}
          
          <PrivateRoute path='/homepage' component={Homepage} />
          <Switch>
              <Route exact path="/homepage" component={Homepage} />
              <Route exact path="/Gratitude" component={Gratitude} />
              <Route exact path="/Exercise" component={Exercise} />
              <Route exact path="/Reading" component={Reading} />
              <Route exact path="/HabitLog" component={HabitLog} />
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
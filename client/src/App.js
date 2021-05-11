import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Footer from "./components/Footer/Footer";

// import Entry from "./pages/Entry";
// import Habits from "./pages/Habits";
import SignupFrom from "./pages/Signup";


class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper> 
            <Route exact path="/" component={SignupFrom} />
  
            {/* <Route exact path="/" component={Entry} />
            <Route exact path="/entries" component={Entry} />
            <Route exact path="/habits" component={Habits} /> */} 
           <Footer />
          </Wrapper>
        </div>
     </Router>
    )
  };
};

export default App;

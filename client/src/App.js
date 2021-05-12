


// import Entry from "./pages/Entry";
// import Habits from "./pages/Habits";
// import SignupFrom from "./pages/Signup";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Footer from "./components/Footer/Footer";
import Gratitude from "./pages/Gratitude";
// import Exercise from "./pages/Exercise";
// import Detail from "./pages/Detail";
// import { StoreProvider } from "./utils/GlobalState";
// import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <Wrapper>
      <div>
          <NavBar />
          <Header />
          <Switch>
            <Route exact path="/" component={Gratitude} />
            {/* <Route exact path="/" component={Exercise} /> */}
            {/* <Route exact path="/home" component={Homepage} /> */}
            {/* <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} /> */}
          </Switch>
          <Footer />
      </div>
      </Wrapper>
    </Router>
  );
}

export default App;


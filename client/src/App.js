import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import Gratitude from "./pages/Gratitude";
import Exercise from "./pages/Exercise";
import Reading from "./pages/Reading";
import HabitLog from "./pages/HabitLog";

function App() {
  return (
    <Router>
      <Wrapper>

          <NavBar />
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/Gratitude" component={Gratitude} />
              <Route exact path="/Exercise" component={Exercise} />
              <Route exact path="/Reading" component={Reading} />
              <Route exact path="/HabitLog" component={HabitLog} />
              {/* <Route exact path="/favorites" component={FavoritesList} />
              <Route exact path="/posts/:id" component={Detail} /> */}
            </Switch>
          </div>
          <Footer />
 
      </Wrapper>
    </Router>
  );
}

export default App;


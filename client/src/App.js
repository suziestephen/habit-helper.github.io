


// import Entry from "./pages/Entry";
// import Habits from "./pages/Habits";
// import SignupFrom from "./pages/Signup";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
// import Detail from "./pages/Detail";
import { StoreProvider } from "./utils/GlobalState";
// import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <Wrapper>
      <div>
        <StoreProvider>
          <NavBar />
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/home" component={Homepage} />
            {/* <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} /> */}
          </Switch>
          <Footer />
        </StoreProvider>
      </div>
      </Wrapper>
    </Router>
  );
}

export default App;


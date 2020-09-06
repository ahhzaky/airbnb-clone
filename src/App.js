import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            {/* /Search */}
            <SearchPage />
          </Route>

          <Route path="/">
            {/* / */}
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

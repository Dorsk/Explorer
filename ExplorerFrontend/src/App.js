import React, { Component } from "react";
import HeaderComponent from "./components/HeaderComponent";
import NotFound from "./components/NotFoundComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeGame from "./components/home/HomeGame";
import AddLocationComponent from "./components/AddFood/AddLocationForm";
import FooterComponent from "./components/FooterComponent";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" exact element={<HomeGame />}></Route>
            <Route
              path="/addlocation"
              exact
              element={<AddLocationComponent />}
            ></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;

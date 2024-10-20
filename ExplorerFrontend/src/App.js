import React, { Component } from "react";
import HeaderComponent from "./components/HeaderComponent";
import NotFound from "./components/NotFoundComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeGame from "./components/home/HomeGame";
import AddFoodComponent from "./components/AddFood/AddFoodForm";
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
            <Route path="/addfood" exact element={<AddFoodComponent />}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./../index.css";

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <a href="/">Explorer</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#compte">Compte</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;

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
                <a href="/game">Explorer</a>
              </li>
              <li>
                <a href="/addlocation">Ajout de données</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/login">Compte</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;

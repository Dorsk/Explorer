import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./App.css";
import imgagefood from "./img/cassoulet.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPosition: { lat: 0, lng: 0 },
      map: null,
      food: {
        id: 0,
        name: "",
        lat: 0.0,
        lon: 0.0,
        description: "",
      },
      id: 1,
    };
  }

  componentDidMount() {
    this.fetchFood();
  }

  async fetchFood() {
    let url = "http://localhost:8080/api/food/" + this.state.id;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ food: data });
      } else {
        console.error("Failed to fetch food");
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error:", error);
      this.setState({ loading: false });
    }
  }

  handleMapClick = (event) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    this.setState({ markerPosition: position }, this.updateMarker);
  };

  onLoad = (map) => {
    this.setState({ map }, this.updateMarker);
  };

  updateMarker = () => {
    const { map, markerPosition, marker } = this.state;
    if (map && window.google) {
      if (marker) {
        marker.position = markerPosition;
      } else {
        const { AdvancedMarkerElement } = window.google.maps.marker;
        const newMarker = new AdvancedMarkerElement({
          position: markerPosition,
          map: map,
        });
        this.setState({ marker: newMarker });
      }
    }
  };

  handleValidateClick = () => {
    const { markerPosition } = this.state;
    alert(`Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <a href="#home">Food Fighter</a>
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
        <main>
          <div className="content">
            <div className="map-container">
              <LoadScript googleMapsApiKey="AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts">
                <GoogleMap
                  mapContainerStyle={{ height: "100%", width: "100%" }}
                  zoom={2}
                  onClick={this.handleMapClick}
                  onLoad={this.onLoad}
                ></GoogleMap>
              </LoadScript>
            </div>
            <div className="info-panel">
              {this.state.food.name}
              <img src={imgagefood} alt="Description" />
              <p>
                <ul>{this.state.food.description}</ul>
              </p>
              <p>
                Latitude : <br />
                {this.state.markerPosition.lat}
              </p>
              <p>
                Longitude : <br />
                {this.state.markerPosition.lng}{" "}
              </p>
              <button
                className="buttonValider"
                onClick={this.handleValidateClick}
              >
                Valider
              </button>
            </div>
          </div>
        </main>
        <footer>
          <p>© 2024 Food Fighter. Tous droits réservés par Julien MOURA</p>
        </footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./App.css";
import imgagefood from "./img/cassoulet.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPosition: { lat: 0, lng: 0 },
      food: null,
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
    this.setState({
      markerPosition: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    });
  };

  handleValidateClick = () => {
    const { markerPosition } = this.state;
    alert(`Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`);
  };

  render() {
    const { markerPosition } = this.state;
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
                  center={{ lat: 0, lng: 0 }}
                  zoom={2}
                  onClick={this.handleMapClick}
                >
                  <Marker position={markerPosition} />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="info-panel">
              <img src={imgagefood} alt="Description" />
              <p>
                <ul>
                  <li>350 g d'haricots lingot ou mogettes</li>
                  <li>2 cuisses de canard confites</li>
                  <li>250 g de poitrine de porc</li>
                  <li>250 g de saucisses</li>
                </ul>
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

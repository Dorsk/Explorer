import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import "../../App.css";

class HomeGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markerPosition: { lat: 0, lng: 0 },
      map: null,
      marker: null,
      food: {
        id: 0,
        name: "",
        lat: 0.0,
        lon: 0.0,
        description: "",
        image: null,
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
    if (map && window.google && window.google.maps.marker) {
      if (marker) {
        marker.position = markerPosition;
      } else {
        const AdvancedMarkerElement =
          window.google.maps.marker.AdvancedMarkerElement;
        if (AdvancedMarkerElement) {
          const newMarker = new AdvancedMarkerElement({
            position: markerPosition,
            map: map,
          });
          this.setState({ marker: newMarker });
        } else {
          console.error(
            "AdvancedMarkerElement is not available in this version of the Google Maps API."
          );
        }
      }
    }
  };

  handleValidateClick = () => {
    const { markerPosition } = this.state;

    // Créer le marker Reponse + la distance avec
    /*const reel = { lat: this.state.food.lat, lng: this.state.food.lon };
        const AdvancedMarkerElementReel =
          window.google.maps.marker.AdvancedMarkerElement;
        if (AdvancedMarkerElementReel) {
          const newMarkerReel = new AdvancedMarkerElementReel({
            position: reel,
            map: this.state.map,
          });
        }
        // trace la ligne entre les 2 markers
        var line = new Polyline({
          path: [this.state.marker, reel],
          map: this.state.map,
        });*/
    // popup d'alerte
    alert(
      `Latitude: ${markerPosition.lat} | ReelLat : ${this.state.food.lat}, Lng: ${markerPosition.lng} | reelLng: ${this.state.food.lon} \n`
    );
  };

  render() {
    const { markerPosition } = this.state;
    return (
      <main>
        <div className="content">
          <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts">
              <GoogleMap
                mapContainerStyle={{ height: "100%", width: "100%" }}
                zoom={2}
                onClick={this.handleMapClick}
                onLoad={this.onLoad}
                center={{
                  lat: this.state.markerPosition.lat,
                  lng: this.state.markerPosition.lng,
                }}
              >
                {markerPosition && <Marker position={markerPosition} />}
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="info-panel">
            {this.state.food.name}
            <img src={this.state.food.image} alt="Description" />
            <p>{this.state.food.description}</p>
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
    );
  }
}

export default HomeGame;

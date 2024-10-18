import React, { Component, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  PinElement,
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
      }
      const AdvancedMarkerElement =
        window.google.maps.marker.AdvancedMarkerElement;
      if (AdvancedMarkerElement) {
        const newMarker = new AdvancedMarkerElement({
          position: marker.position,
          map: map,
        });
        newMarker.setMap(map);
        this.setState({ marker: newMarker });
      } else {
        console.error(
          "AdvancedMarkerElement is not available in this version of the Google Maps API."
        );
      }
    }
  };

  handleValidateClick = () => {
    const { markerPosition, marker, map } = this.state;

    // Créer le marker Reponse + la distance avec
    const reel = { lat: this.state.food.lat, lng: this.state.food.lng };

    // trace la ligne entre les 2 markers
    const coord2points = [markerPosition, reel];
    const line = new window.google.maps.Polyline({
      path: coord2points,
      map: map,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 6,
      icons: [
        {
          icon: { path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
          offset: "100%",
        },
      ],
    });
    line.setMap(map);
    // popup d'alerte
    const nwMKreel = new window.google.maps.Marker({
      position: reel,
      map: this.state.map,
    });
    const currentMKreel = new window.google.maps.Marker({
      position: this.state.markerPosition,
      map: this.state.map,
    });
    var distance = this.haversine_distance(currentMKreel, nwMKreel);
    alert(`Distance : ${distance * 1.60934} km \n`);

    // Next game
    this.setState({ id: this.state.id + 1 });
    this.fetchFood();
  };

  // distance entre 2 marker
  haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng() - mk1.position.lng()) * (Math.PI / 180); // Radian difference (longitudes)

    var d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );
    return d;
  }

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
                {markerPosition && (
                  <gmp-advanced-marker
                    position={markerPosition}
                    title="string"
                  ></gmp-advanced-marker>
                )}
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

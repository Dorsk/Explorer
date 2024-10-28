import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
    };

    // Liaison des méthodes
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // Méthode pour gérer les changements dans les champs de saisie
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // Méthode pour gérer la soumission du formulaire
  async handleLogin(event) {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username,
          password,
        }
      );
      this.setState({ message: response.data.message });
    } catch (error) {
      this.setState({
        message: error.response?.data.message || "Erreur de connexion",
      });
    }
  }

  render() {
    const { username, password, message } = this.state;

    return (
      <main>
        <div className="content">
          <div>
            <h2>Connexion</h2>
            <form onSubmit={this.handleLogin}>
              <input
                type="text"
                name="username"
                placeholder="Nom d’utilisateur"
                value={username}
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={password}
                onChange={this.handleInputChange}
              />
              <button type="submit">Se connecter</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </main>
    );
  }
}

export default Login;

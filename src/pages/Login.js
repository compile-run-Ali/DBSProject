import React from "react";
import logo from "../assets/download.png";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  state = {
    email: "",
    password:"",

  }
  submit = async (e) => {
    e.preventDefault();

    const res = await axios.get("http://localost:8080/user/detail", this.state);
    console.log(res.data);
  };

  change(e) {
    console.log(e);
    this.setStateS({
      email: e.target.value,
      password: e.target.value,
    });
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <div className="header">
        <header>
          <a href="#default" src={logo}></a>
          <div class="header-right">
          <Link to="/">
              <a className="active">
              Login
              </a>
          </Link>
            <Link to="/register">
              <a>
              Register
              </a>
          </Link>
          <Link to="/aboutus">
              <a>
              About us
              </a>
          </Link>
          </div>
        </header>
        </div>
        <div className="login">
          <img src={logo}></img>
          <form method="GET" onSubmit={this.submit}>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.change}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                onChange={this.change}
              />
            </div>
            <input type="submit" value="Login" class="btn btn-primary"></input>
          </form>
          <br></br>
          <Link to="/register">
            <button type="button" class="btn btn-info">
              Or register
            </button>
          </Link>
          <p className="App-intro">;{this.state.apiResponse}</p>
        </div>
      </div>
    );
  }
}

export default login;

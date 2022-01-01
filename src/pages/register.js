import React from "react";
import logo from "../assets/download.png";
import axios from "axios"
import { Outlet, Link } from "react-router-dom";

class register extends React.Component {
  state = {
    email: "",
    password: "",
    username:"",
    user_age:"",
    user_country:"",
    creditcard_info:"",
  }
  submit = async (e) => {
    e.preventDefault();

    const res = await axios.get("http://localost:8080/user/search", this.state);
    console.log(res.data);
  };

  change(e) {
    console.log(e);
    this.setStateS({
      email: e.target.value,
      password: e.target.value,
      username:e.target.value,
      user_age:e.target.value,
      user_country:e.target.value,
      creditcard_info:e.target.value,

    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <header>
            <a href="#default"></a>
            <div class="header-right">
              <Link to="/">
                <a>Login</a>
              </Link>
              <Link to="/register">
                <a className="active">Register</a>
              </Link>
              <Link to="/aboutus">
                <a>About us</a>
              </Link>
            </div>
          </header>
        </div>
        <div className="reg">
          <img src={logo}></img>
          <form method="POST" onSubmit={this.submit}>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={this.change}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div>
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  placeholder="Enter Username"
                  name="username"
                  onChange={this.change}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.change}
                />
              </div>
              <div class="form-group">
                <label for="Age">Age</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Your age"
                  name="user_age"
                  onChange={this.change}
                />
              </div>
              <div class="form-group">
                <label for="user_country">Country</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your country"
                  name="user_country"
                  onChange={this.change}
                />
              </div>
              <div class="form-group">
                <label for="creditcard_info">Creditcard Information</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="creditcard information"
                  name="creditcard_info"
                  onChange={this.change}
                />
              </div>
              <input
                type="submit"
                value="Register"
                class="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default register;

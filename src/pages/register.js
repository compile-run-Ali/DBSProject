import React from "react";
import logo from "../assets/download.png";
import { Outlet, Link } from "react-router-dom";

class register extends React.Component {
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
          <form method="POST" action="http://localhost:8080/user/search">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div>
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter Username"
                  name="username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div class="form-group">
                <label for="Age">Age</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Your age"
                  name="user_age"
                />
              </div>
              <div class="form-group">
                <label for="user_country">Country</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your country"
                  name="user_country"
                />
              </div>
              <div class="form-group">
                <label for="creditcard_info">Creditcard Information</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="creditcard information"
                  name="creditcard_info"
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

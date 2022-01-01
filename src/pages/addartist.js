import React from "react";
import logo from "../assets/download.png";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

class artist extends React.Component {
  state = {
    aname: "",
    country:""
  }
  submit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localost:8080/artist/details", this.state);
    console.log(res.data);
  };

  change(e) {
    console.log(e);
    this.setStateS({
      name: e.target.value,
      country:e.target.value,
    });
  }
  render() {
    return (
      <div>
        <div className="header">
          <header>
            <img src={logo} />
            <a href="#default"></a>
            <div class="header-right">
              <Link to="/home">
                <a>Home</a>
              </Link>
              <Link to="/addartist">
                <a className="active">Add Artist</a>
              </Link>
              <Link to="/addsongs">
                <a>addsongs</a>
              </Link>
            </div>
          </header>
        </div>
        <div class="songget">
          <img src={logo}></img>
          <form method="POST" onSubmit={this.submit} >
            <div class="form-group">
              <label for="aname">Artist name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                name="aname"
                onChange={this.change}
              />
              <div>
                <label for="country">Country of the artist</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Country"
                  name="country"
                  onChange={this.change}
                />
              </div>
              <input
                type="submit"
                value="Add Artist"
                class="btn btn-warning"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default artist;

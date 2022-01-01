import React from "react";
import logo from "../assets/download.png";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

class song extends React.Component {
  state = {
    sname: "",
    aname:"",
    url:"",
    track_length:"",
  }
  submit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localost:8080/songs/add", this.state);
    console.log(res.data);
  };

  change(e) {
    console.log(e);
    this.setStateS({
      sname: e.target.value,
      aname: e.target.value,
      url: e.target.value,
      track_length:e.target.value,
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
                <a>Add Artist</a>
              </Link>
              <Link to="/addsongs">
                <a className="active">addsongs</a>
              </Link>
            </div>
          </header>
        </div>
        <div class="songget">
          <img src={logo}></img>
          <form method="POST" onSubmit={this.submit}>
            <div class="form-group">
              <label for="sname">Song name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                name="sname"
                onChange={this.change}
              />
              <div>
                <label for="aname">Artist name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="e.g Post Malone"
                  name="aname"
                  onChange={this.change}
                />
              </div>
              <div>
                <label for="url">embed id of the song</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="insert url"
                  name="url"
                  onChange={this.change}
                />
              </div>
              <div class="form-group">
                <label for="track_length">
                  track length(between 0 and 700 seconds)
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="track_length"
                  min="0"
                  max="700"
                  onChange={this.change}
                />
              </div>
              <input
                type="submit"
                value="Add song"
                class="btn btn-danger"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default song;

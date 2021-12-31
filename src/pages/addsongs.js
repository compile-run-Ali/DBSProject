import React from "react";
import logo from "../assets/download.png";
import { Outlet, Link } from "react-router-dom";

class song extends React.Component {
  render() {
    return (
      <div class="songget">
        <img src={logo}></img>
        <form method="POST">
          <div class="form-group">
            <label for="name">Song name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              name="name"
            />
            <div>
              <label for="url">url of the song</label>
              <input
                type="text"
                class="form-control"
                placeholder="insert url"
                name="url"
              />
            </div>
            <div class="form-group">
              <label for="track_length">track length(between 0 and 700 seconds)</label>
              <input
                type="number"
                class="form-control"
                name="track_length"
                min="0"
                max="700"
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
    );
  }
}

export default song;

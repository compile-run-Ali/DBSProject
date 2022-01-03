import axios from "axios";
import React from "react";
import { Outlet, Link } from "react-router-dom";

class searchbar extends React.Component {


  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <div className="song_button">
          <Link to="/addsongs">
            <button type="button" class="btn btn-info">
              Add a song
            </button>
          </Link>
        </div>
        <div className="artist_button">
          <Link to="/addartist">
            <button type="button" class="btn btn-info">
              Add Artist
            </button>
          </Link>
        </div>
        <div className="login-container">
          <nav>
            <form method="GET" action="http://localhost:8080/song/details">
            <div class="form-group">
              <label for="sname">Song name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                name="sname"
              />
              </div>
              <button type="submit">Search by song</button>
            </form>
          </nav>
        </div>
        <div className="login-container">
          <nav>
            <form method="GET" action="http://localhost:8080/artist/details">
              <input
                type="text"
                placeholder="Artist"
                name="aname"
              />
              <button type="submit">Search by artist name</button>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}
export default searchbar;

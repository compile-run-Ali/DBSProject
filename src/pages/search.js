import axios from "axios";
import React from "react";
import { Outlet, Link } from "react-router-dom";

class searchbar extends React.Component {
  stateS = {
    sname: "",
  };
  stateA={
    aname:"",
  }

  submit = async (e) => {
    e.preventDefault();

    const res = await axios.get("http://localost:8080/song/details", this.state);
    console.log(res.data);
  };
  asubmit = async(e)=>{
    e.preventDefault();

    const res = await axios.get("http://localost:8080/artist/details", this.state);
    console.log(res.data);
  }

  change(e) {
    console.log(e);
    this.setStateS({
      name: e.target.value,
    });
  }
  achange(e) {
    console.log(e);
    this.setStateA({
      name: e.target.value,
    });
  }


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
            <form method="GET" onSubmit={this.submit}>
              <input
                type="text"
                placeholder="Song"
                name="sname"
                onChange={this.change}
              />
              <button type="submit">Search by song</button>
            </form>
          </nav>
        </div>
        <div className="login-container">
          <nav>
            <form method="GET" onSubmit={this.asubmit}>
              <input
                type="text"
                placeholder="Artist"
                name="aname"
                onChange={this.achange}
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

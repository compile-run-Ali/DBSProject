import axios from "axios";
import React from "react";
import { Outlet, Link } from "react-router-dom";

export const id="wcGTqKj_1-4";
class searchbar extends React.Component {
  state={
    sname:'',
    URL:"",
  };
  handleSubmit=event=>{
    event.preventDefault();


    axios.post(`http://localhost:8080/song/details`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data[0].URL);
        return res.data[0].URL;
      })
  }
  handleChange=event=>{
    this.setState({sname:event.target.value});
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
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Song"
                name="sname"
                onChange={this.handleChange}
              />
              <button type="submit">Search by song</button>
            </form>
          </nav>
        </div>
        <div className="login-container">
          <nav>
            <form method="POST" action="http://localhost:8080/artist/details">
              <input
                type="text"
                placeholder="Artist"
                name="aname"
              />
              <button type="submit">Search by artist name</button>
            </form>
          </nav>
          <div>
            
          </div>
        </div>
        
      </div>
    );
  }
}
export default searchbar;


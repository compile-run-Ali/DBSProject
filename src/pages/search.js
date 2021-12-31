import axios from "axios";
import React from "react";

class searchbar extends React.Component {
  
  state = {
    name: ""
  }

  submit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localost:8080/123", this.state);
    console.log(res.data);
  }  

  change(e) {
    console.log(e)
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
        <div className="topnav">
        <a className="active" href="#home">Home</a>
        <div className="login-container">
          <nav>
          <form method="POST" onSubmit={this.submit}>
            <input type="text" placeholder="Search" name="name" onChange={this.change}/>
            <button type="submit" >Search</button>
          </form>
          </nav>
        </div>
      </div>
    );
  }
}
export default searchbar;

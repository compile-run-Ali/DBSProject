import React from "react";

class searchbar extends React.Component {
  render() {
    return (
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <div class="login-container">
          <nav>
          <form method="POST">
            <input type="text" placeholder="Search" name="name"/>
            <button type="submit">Search</button>
          </form>
          </nav>
        </div>
      </div>
    );
  }
}
export default searchbar;

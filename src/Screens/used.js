import React from "react";
import { Link } from "react-router-dom";

class Used extends React.Component {
  render() {
    return (
      <div className="container-used">
        <a class="skip-link" href="#moon">
          Skip to next
        </a>
        <div className="home-text-wrapper">
          <div className="title-wrapper">
            <p> used </p>
          </div>
          <p>
            Why did you change
            <br />
            Into someone so strange
            <br />
            <br />
            Darling I don't understand
            <br />
            Everything was so grand
            <br/>
          </p>

          <Link to="/" className="link">
            «--main--«
          </Link>
        </div>
        <img
          className="fixed-picture"
          src={require("../images/back.gif")}
          alt="lain-moon"
        />
      </div>
    );
  }
}
export default Used;

import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container-moon">
        <a class="skip-link" href="#artist">
          Skip to next
        </a>
        <div className="title-wrapper">
          <p>moon</p>
        </div>
        <img
          src={require("../images/moonflicker.gif")}
          alt="Lain moon"
        />
        <div className="text-wrapper">
          <p>
            {" "}
            i look at you <br />
            in your yellow dress <br />
            and i look at the moon - <br />
            its silver light in excess <br />
            and just cause the moon <br />
            waxes and wanes <br />
            i don't think it's fair <br />
            that you do the same <br />
          </p>
          <br />
          <Link to="/" className="link">
            «--main--«
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;

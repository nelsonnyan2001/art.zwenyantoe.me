import React from "react";
import { Link } from "react-router-dom";

class tea extends React.Component {
  render() {
    return (
      <div className="container-tea">
        <a class="skip-link" href="#spring">
          Skip to next
        </a>
        <img
          src={require("../images/lain-laughing.gif")}
          alt="Lain laughing"
          className="image-container"
        ></img>
        <div className="text-wrapper">
          <div class="title-wrapper">
            <p>tea</p>
          </div>
          <p>
            {" "}
            the tea that I drank <br />
             at the corner store we love <br />
             was sweet and cold <br />
             just how i liked it <br />
             i don't know how <br />
             you push all the right buttons <br />
             but this tea isn't nearly as sweet <br />
             without you <br />
            
            <Link to="/" className="link-tea">
              «--main--«
            </Link>
          </p>
        </div>
        <img
          src={require("../images/lain-yearning.gif")}
          alt="Sad Lain"
          className="image-container"
        ></img>
      </div>
    );
  }
}

export default tea;

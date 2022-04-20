import React from "react";
import { Link } from "react-router-dom";

class Spring extends React.Component {
  render() {
    return (
      <div className="container-spring">
        <a class="skip-link" href="#home">
          Skip to next
        </a>
        <div className="spring-text-wrapper">
          <div class="title-wrapper">
            <p>spring</p>
          </div>
          <p>
            It's not the rain going pitter patter on my drab window
            <br />
            Or the flowers that bloom in January that you loved to get.
            <br />
            Not your picture on the wall that seems incapable of getting older-
            <br />
            Just sweeter,
            <br />
            and not even the cup you got me the last time we met.
            <br />
            Your absurdly tiny hands in mine that were gentle for so few
            <br />
            The slurring I picked up from talking with you every day and
            <br />
            the way you'd cross your eyes at the slightest inconvenience
            <br />
            aren't really exactly why either.
            <br />
            The flowers are getting ready to bloom again.
            <br />
            You can go back to wearing your white spring shoes.
            <br />
            It's late. I miss all of the things that aren't.
            <br />
            Or maybe I just miss you.
          </p>
        </div>
        <div className="vertical-container">
          <div className="spring-navigator">
            <Link to="/" className="link">
              «--main--«
            </Link>
          </div>
          <img
            src={require("../images/left-hand.gif")}
            alt="Left Hand"
            className="image-container-left"
          />
          <img
            src={require("../images/right-hand.gif")}
            alt="Right Hand"
            className="image-container-right"
          />
        </div>
      </div>
    );
  }
}
export default Spring;

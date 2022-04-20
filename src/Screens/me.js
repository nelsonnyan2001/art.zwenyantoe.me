import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Me extends React.Component {
  render() {
    return (
      <div className="container-me">
        <div className="text-me">
          <p>
            <div className="big-hi">hi</div>
            <br />
            <Link to="/" className="link">
              «--main--«
            </Link>
            <br />
            <br />
            you somehow stumbled onto my site -
            <br />
            or maybe i forced you to come look at it.
            <br />
            <br />
            my name's zwe.
            <br />i really like writing mega edgy shit.
            <br />
            <br />
            most of the stuff on this site is written by myself,
            <br />
            unless there's a little text at the bottom indicating otherwise.
            <br />
            <br />i built this site from the ground up with ReactJS.
            <br />
            <br />
            if anyone reading this wants to learn how to do it,
            <br />
            i'd be more than happy to help.
            <br />
            <br />
            shoot me a dm or send me an email at zwenyantoe@gmail.com
            <br />
            <br />
            here's the links to my socials
            <br />
          </p>
        </div>
        <div className="links-container">
          <a href="https://github.com/nelsonnyan2001">
            <img
              className="link-picture"
              src={require("../images/github.png")}
              alt="github"
            />
          </a>
          <a href="https://www.facebook.com/zwenyantoe">
            <img
              className="link-picture"
              src={require("../images/facebook.png")}
              alt="github"
            />
          </a>
          <a href="https://www.instagram.com/nelly_skrt/">
            <img
              className="link-picture"
              src={require("../images/instagram.png")}
              alt="github"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Me;

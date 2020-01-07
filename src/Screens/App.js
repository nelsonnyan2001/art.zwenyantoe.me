import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container-app">
        <div className="main-text-wrapper">
          <Link to='/tea'
            className="link-main">»--tea--»
          </Link>
          <Link to='/spring'
            className="link-main">»--spring--»
          </Link>
          <Link to='/login'
            className="login-link">login
          </Link>
        </div>
        <div className="reversed-column-container">
          <img src={require('../images/laindress.gif')}
          alt="lain-dress"
            className='lain-container' />
        </div>
        <iframe width="1px" height="1px" src="https://www.youtube.com/embed/rLiyFaLs8PY?rel=0&amp;autoplay=1&amp;loop=1" frameborder="0"/>
      </div>

    );
  }
}

export default App;

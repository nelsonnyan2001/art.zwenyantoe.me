import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container-app">
        <a class="skip-link" href="#tea">Skip to main</a>
        <div id ="maincontent" className="text-wrapper">
          <div className="top-links">
            <Link to='/login'
              className="white-links">login
            </Link> •{' '}
            <Link to='/me'
              className="white-links">
              me
          </Link>
          </div>

          <br />
          <Link to='/tea'
            className="link">»--tea--»
          </Link>
          <Link to='/spring'
            className="link">»--spring--»
          </Link>
          <Link to='/home'
            className="link">»--home--»
          </Link>
          <Link to='/moon'
            className="link">»--moon--»
          </Link>
          <Link to='/artist'
            className="link">»--artist--»
          </Link>
        </div>
        <div className="reversed-column-container">
          <img src={require('../images/laindress.gif')}
            alt="lain-dress"
            className='lain-container' />
        </div>
      </div>

    );
  }
}

export default App;

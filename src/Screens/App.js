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
          <Link to='/home'
            className="link-main">»--home--»
          </Link>
        </div>
        <div className="reversed-column-container">
          <img src={require('../images/laindress.gif')}
            className='lain-container' />
        </div>
      </div>

    );
  }
}

export default App;

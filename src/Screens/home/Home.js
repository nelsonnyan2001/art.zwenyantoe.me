import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container-home">
                <img src={require('../../images/suit.gif')} />
            </div>
        );
    }
}

export default Home;

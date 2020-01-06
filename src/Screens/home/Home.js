import React from 'react';
import './Home.css';
import {} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container-home">
                <img src={require('../../images/suit.gif')} 
                alt="suit"/>
            </div>
        );
    }
}

export default Home;

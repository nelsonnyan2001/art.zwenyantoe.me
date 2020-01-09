import React from 'react';
import './Secret.css';
import { } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container-secret">
                <div className="content-wrapper">
                    <div className="secret-text-wrapper">
                        <p> how did you find me </p>
                    </div>
                    <img className="secret-image"
                        src={require('../../images/lain-screaming.gif')} />
                </div>
            </div>
        );
    }
}

export default Home;

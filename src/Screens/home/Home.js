import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container-home">
                <div className="home-text">
                    <div className="home-text-wrapper">
                        <p> Listen to the mustnt's, child. <br/>
                            <br/> Listen to the shouldn'ts, <br/>
                            <br/> the impossibles, <br/>
                            <br/> the won'ts. <br/>
                            <br/> Listen to the never haves, <br/>
                            <br/> then listen close to me... <br/>
                            <br/> Anything can happen, child. <br/>
                            <br/> Anything can be. <br/>
                        </p>
                    </div>
                    <div className="home-small-wrapper">
                        <p>(shel silverstein)</p>
                    </div>
                    <div className="home-text-wrapper">
                        <Link to="/"
                        className="home-link">
                            «--Home--«
                        </Link>
                    </div>
                </div>
                    <img className="fixed-picture"
                    src={require('../../images/lain-sleeping.gif')}/>
                </div>
        );
    }
}

export default Home;

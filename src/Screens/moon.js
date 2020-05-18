import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container-moon">
                <a class="skip-link" href="#artist">Skip to next</a>
                <div className="title-wrapper">
                    <p>moon</p>
                </div>
                <img src={require('../images/moonflicker.gif')}
                alt="Lain moon" />
                <div className="text-wrapper">
                    <p> i look at you <br />
                        <br /> in your yellow dress <br />
                        <br /> and i look at the moon - <br />
                        <br /> its silver light in excess <br />
                        <br /> and just cause the moon <br />
                        <br /> waxes and wanes <br />
                        <br /> i don't think it's fair <br />
                        <br /> that you do the same <br />
                    </p>
                    <br />
                    <Link to="/"
                        className="link">
                        «--main--«
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;

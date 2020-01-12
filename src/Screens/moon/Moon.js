import React from 'react';
import './Moon.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container-moon">
                <img src={require('../../images/moonflicker.gif')} />
                <div className="moon-text-wrapper">
                    <div className="moon-title-wrapper">
                        <p>moon</p>
                    </div>
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
                    className="link-moon">
                        «--main--«
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;

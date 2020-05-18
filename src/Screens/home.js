import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container-home">
                <a class="skip-link" href="#moon">Skip to next</a>
                    <div className="home-text-wrapper">
                        <div className="title-wrapper">
                            <p> home </p>
                        </div>
                        <p> the leaves on the sidewalk don't crunch like they used to. <br />
                        <br />    the crackle of the week-old branches crumbling under our feet<br />
                        <br />    as we ran under the orange glow of the evening sun,<br />
                        <br />   trying our best to make it home in time for dinner.<br />
                        <br />                            
                        <br />    the tree we sat on as we talked about nothing at all was a masterpiece<br />
                        <br />    of countless others carving in declarations of their eternal love.<br />
                        <br />    the cheesy nonsense gave us something to make fun of and laugh at -<br />
                        <br />    but didn't stop us from finding something to whittle in our names.<br />
                        <br />
                        <br />    it might just be that autumn came late this year.<br />
                        <br />    maybe the leaves aren't the correct kind of dry yet.<br />
                        <br />    and the tree we ridiculed got fenced off from the public<br />
                        <br />    and its million loving, destructive hands.<br />
                        <br />
                        <br />    i don't really worry about being late for dinner anymore.<br />
                        <br />    cause now dinner's just a fancy word for food after six.<br />
                        <br />    and my ma tells me to eat at home and not stay out too late.<br />
                        <br />     but what do i do when all home is is something that feels like you?<br />
                        </p>

                        <Link to="/"
                            className="link">
                            «--main--«
                        </Link>
                    </div>
                <img className="fixed-picture"
                    src={require('../images/lain-sleeping.gif')}
                    alt="lain-moon" />
            </div>
        );
    }
}

export default Home;

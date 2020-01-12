import React from 'react';
import './Spring.css';
import { Link } from 'react-router-dom';

class Spring extends React.Component {
    render() {
        return (
            <div className="container-spring">

                <div className="spring-text-wrapper">
                    <div class="spring-title-wrapper">
                        <p>spring</p>
                    </div>
                    <p>It's not the rain going pitter patter on my drab window<br />
                        <br />Or the flowers that bloom in January that you loved to get.<br />
                        <br />Not your picture on the wall that seems incapable of getting older-<br />
                        <br />Just sweeter,<br />
                        <br />and not even the cup you got me the last time we met.<br />

                        <br />Your absurdly tiny hands in mine that were gentle for so few<br />
                        <br />The slurring I picked up from talking with you every day and<br />
                        <br />the way you'd cross your eyes at the slightest inconvenience<br />
                        <br />aren't really exactly why either.<br />

                        <br />The flowers are getting ready to bloom again.<br />
                        <br />You can go back to wearing your white spring shoes.<br />
                        <br />It's late. I miss all of the things that aren't.<br />
                        <br />Or maybe I just miss you.</p>
                </div>
                <div className="vertical-container">
                    <div className="spring-navigator">
                        <Link to='/'
                            className="link">
                            «--main--«
                        </Link>
                    </div>
                    <img
                        src={require('../../images/left-hand.gif')}
                        alt="Left Hand"
                        className="image-container-left" />
                    <img
                        src={require('../../images/right-hand.gif')}
                        alt="Right Hand"
                        className="image-container-right" />

                </div>
            </div>
        )
    }
}
export default Spring;
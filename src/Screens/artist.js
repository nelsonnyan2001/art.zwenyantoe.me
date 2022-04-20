import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Artist extends React.Component {
    render() {
        return (
            <div className="artist-home">
                <a class="skip-link" href="# ">Skip to next</a>
                <div className="text-wrapper">
                    <div className="title-wrapper">
                        <p> artist </p>
                    </div>
                    <p> As a girl, she dreamt of being a creator <br />
                        of stories and metaphors.<br />
                        She dreamt of colours as they swirled around her canvas<br />
                        Different strokes of her brush telling their own stories.<br />
                        She dreamt of words as they strung together,<br />
                        Each line holding the weight of the world.<br />
                        She dreamt of music as her hands brushed over the keys<br />
                        The highs and lows imitating her own seasons of melancholy.<br />
                        Now she has grown up to realise - <br />
                        how naive it was<br />
                        to expect anyone to read between the lines <br />
                        and understand. <br />

                    </p>
                    <div className="artist-text-small">
                        {"<wonderland> - you're not here anymore. I still miss you sometimes"}
                    </div>
                    <br />
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

export default Artist;

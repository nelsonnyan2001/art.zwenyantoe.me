import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Screens/App';
import spring from './Screens/spring/Spring';
import tea from './Screens/tea/tea';
import home from './Screens/home/Home';
import login from './Screens/login/Login';
import artist from './Screens/artist/artist';
import moon from './Screens/moon/Moon';
import secret from './Screens/secret/Secret';
import me from './Screens/me/Me';
import alith from './Screens/alith/alith';

import { Route, HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
  <HashRouter>
    <Route exact path="/" component={App} />
    <Route path="/spring" component={spring} />
    <Route path="/tea" component={tea} />
    <Route path="/home" component={home} />
    <Route path="/login" component={login} />
    <Route path="/secret" component={secret} />
    <Route path="/artist" component={artist} />
    <Route path="/moon" component={moon} />
    <Route path="/me" component={me} />
    <Route path="/alith" component={alith} />
  </HashRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

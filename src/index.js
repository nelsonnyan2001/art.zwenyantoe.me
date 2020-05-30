import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Screens/App';
import spring from './Screens/spring';
import tea from './Screens/tea';
import home from './Screens/home';
import login from './Screens/login';
import artist from './Screens/artist';
import moon from './Screens/moon';
import secret from './Screens/secret';
import me from './Screens/me';
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
  </HashRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

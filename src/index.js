import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from './redux/mainReducer';

const appstore = createStore(mainReducer);


ReactDOM.render(
<Provider store={appstore}>
{/*<BrowserRouter>*/}
 <Router>
    <Route path="/:filter?" component={App} />
</Router>
{/*</BrowserRouter>*/}
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

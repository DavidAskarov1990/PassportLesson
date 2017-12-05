import React, { Component } from 'react';
import Home from '../Home/Home.jsx';
import LoginFrom from '../Login/Login.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/login' component={LoginFrom} />
                </Switch>
            </div>
        )
    }
}

export default App;

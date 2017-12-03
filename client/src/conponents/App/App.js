import React, { Component } from 'react';
import LoginFrom from '../Login/Login.jsx';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginFrom/>
            </div>
        )
    }
}

export default App;

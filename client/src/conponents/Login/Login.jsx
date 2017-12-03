import React, { Component } from 'react';
import classnames from 'classnames';
import './Login.scss';

class LoginFrom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    render() {
        return (
        <div>
            <div className="title"> AuthoRizaTion </div>
            <div className="login-form">
                <form action="/login" method="post">
                    <div>
                        <div>
                            <span>Username</span>
                        </div>
                        <input type="text" name="username" value={this.state.username} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <div>
                            <span>Password</span>
                        </div>
                        <input type="password" name="password" value={this.state.password} onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>

        )
    }
}

export default LoginFrom;
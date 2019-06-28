import React, { Component } from 'react';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Home extends Component {

    user: { nick: string, id: string };

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {user:"",isLogin: false};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    render() {
        this.user = {};
        const { cookies } = this.props;
        this.user.id = cookies.get("userId");
        this.user.nick = cookies.get("userNick");
        if (this.user.id == null || this.user.id === "undefined") {
            this.user = null;
            this.state.isLogin = false;
        } else {
            this.state.isLogin = true;
        }
        return (
            <div>
                   <p>{this.user == null ? "" : this.user.nick}</p>
                   <p><span onClick={this.handleLogin}>{this.state.isLogin?"退出登录":"登录"}</span>  <span onClick={this.handleRegister}>注册</span></p>
            </div>
        );
    }

    handleLogin(event) {
        if(this.state.isLogin) {
            const { cookies } = this.props;
            cookies.remove("userId");
            this.setState({isLogin:false})
        } else {
            this.props.history.push('/user/login');
        }
    }

    handleRegister(event) {
        this.props.history.push('/user/register');
    }
}

export default withCookies(Home)
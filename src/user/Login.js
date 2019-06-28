import React, { Component } from 'react';
import http from "../services/service";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Login extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {phoneNum: '', pwd:'', result:null};
        this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    render() {
        return (
            <div>
                <p>手机号</p>
                <input type= "text" placeholder="输入手机号" value={this.state.phoneNum} onChange={this.handlePhoneNumChange}/>
                <p><b>密码</b> <span>{this.state.pwdMsg}</span></p>
                <input type= "password" placeholder="输入密码" value={this.state.pwd} onChange={this.handlePwdChange}/>
                <p><button type="button" onClick={this.handleLogin}>登录</button></p>
                <p>{this.state.result}</p>
            </div>
        );
    }

    handlePhoneNumChange(event) {
        this.setState({phoneNum:event.target.value})
    }

    handlePwdChange(event) {
        this.setState({pwd:event.target.value})
    }

    async handleLogin(event) {
        const res = await http.get('/user/login', {phoneNum:this.state.phoneNum, pwd:this.state.pwd});
        if (res != null && res.data != null && res.data.result === "ok") {
            this.setState({result: "登录成功"});
            const { cookies } = this.props;
            cookies.set('userId', JSON.stringify(res.data.data.Id));
            cookies.set('userNick', JSON.stringify(res.data.data.Nick));
            this.props.history.goBack();
        }
    }
}

export default withCookies(Login)
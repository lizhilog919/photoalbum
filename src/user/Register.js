import React, {Component} from 'react';
import {Input, Button} from 'antd';
import http from "../services/service";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {phoneNum: '', nick: '', pwd: '', phoneMsg: "", nickMsg: "", pwdMsg: "", result: null};
        this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
        this.handleNickChange = this.handleNickChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    render() {
        return (
            <div>
                <p><b>手机号</b> <span>{this.state.phoneMsg}</span></p>
                <Input placeholder="输入手机号" allowClear onChange={this.handlePhoneNumChange}/>
                <p><b>昵称</b> <span>{this.state.nickMsg}</span></p>
                <Input placeholder="输入昵称" allowClear onChange={this.handleNickChange}/>
                <p><b>密码</b> <span>{this.state.pwdMsg}</span></p>
                <Input.Password placeholder="输入密码" onChange={this.handlePwdChange}/>
                <p><Button type="primary" onClick={this.handleRegister}>注册</Button></p>
                <p>{this.state.result}</p>
            </div>
        );
    }

    handlePhoneNumChange(event) {
        this.setState({phoneNum: event.target.value})
    }

    handleNickChange(event) {
        this.setState({nick: event.target.value})
    }

    handlePwdChange(event) {
        this.setState({pwd: event.target.value})
    }

    async handleRegister() {
        if (this.state.phoneNum.length !== 11 || this.state.phoneNum.isNaN) {
            this.setState({phoneMsg: '手机号码必须是11位数字'});
            return
        }
        if (this.state.nick.length < 2 || this.state.nick.length > 6) {
            this.setState({nickMsg: '昵称长度必须在2-6之间'});
            return
        }
        if (this.state.pwd.length < 6 || this.state.pwd.length > 12) {
            this.setState({pwdMsg: '密码长度必须在6-12之间'});
            return
        }
        const res = await http.get('/user/register', {
            phoneNum: this.state.phoneNum,
            nick: this.state.nick,
            pwd: this.state.pwd
        });
        if (res != null && res.data != null && res.data.result === "ok") {
            this.setState({result: "注册成功"})
        } else {
            this.setState({result: res.data.msg})
        }
    }
}

export default Register
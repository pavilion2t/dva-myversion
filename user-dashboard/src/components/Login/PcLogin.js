import React, { Component } from 'react';
import styles from './Login.css';
import { connect } from 'dva';
import { Input, Button, Radio } from 'antd';
// import { routerRedux } from 'dva/router';

class PcLogin extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.state = {
      phoneNumber: "",
      authCode: "",
      password: "",
    };
  }

  handleChange(e, name) {
    console.log(e.target.value)
    console.log(name)
    this.setState({
      [name]: e.target.value
    })
  }

  handleRegister() {
    console.log("handleRegister")
  }

  render() {
    const { phoneNumber,authCode,password } = this.state;
    return (
      <div className={styles.background}>
        <div className={styles.card}>
          <div className={styles.registerOrLogin}>
            <div>账号登录</div>
            <div>扫码登录</div>
          </div>
          <Input
            placeholder="请输入邮箱或手机号"
            value={phoneNumber}
            onChange={e => this.handleChange(e,"phoneNumber")}
            className={styles.cardInput}/>
          <Input
            placeholder="请输入密码"
            type="password"
            value={password}
            onChange={e => this.handleChange(e,"password")}
            className={styles.cardInput}/>
          <div className={styles.rememberOrForget}>
            <Radio>记住登录状态</Radio>
            <span className={styles.blueChar}>忘记密码</span>
          </div>
          <div className={styles.registerOrLogin}>
            <Button
              type="primary"
              onClick={this.handleSubmit}
              className={styles.registerButton}>登录</Button>
            <Button
              type="default"
              onClick={this.handleSubmit}
              className={styles.registerButton}>注册</Button>
          </div>
          <div className={styles.otherLoginMethod}>
            <div style={{backgroundColor:"#f5f5f5", height: 1,width:100}}></div>
            使用其他方式登录
            <div style={{backgroundColor:"#f5f5f5", height: 1,width:100}}></div>
          </div>
          <div className={styles.fourMethods}>
            <img src={require("../../assets/wechat.png")}></img>
            <img src={require("../../assets/wechat.png")}></img>
            <img src={require("../../assets/wechat.png")}></img>
            <img src={require("../../assets/wechat.png")}></img>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//
// }

// export default connect(mapStateToProps)(PcLogin);
export default PcLogin

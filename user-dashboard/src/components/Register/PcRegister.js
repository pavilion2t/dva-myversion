import React, { Component } from 'react';
import styles from './Register.css';
import { connect } from 'dva';
import { Input, Button } from 'antd';
import { Link } from 'dva/router';
// import { routerRedux } from 'dva/router';

class PcRegisterByCellphone extends Component {
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
            <div>手机注册</div>
            <div>邮箱注册</div>
          </div>
          <Input
            placeholder="请输入手机号"
            value={phoneNumber}
            onChange={e => this.handleChange(e,"phoneNumber")}
            className={styles.cardInput}/>
          <Input
            placeholder="请输入验证码"
            value={authCode}
            onChange={e => this.handleChange(e,"authCode")}
            className={styles.cardInput}
            suffix="获取验证码"/>
          <Input
            placeholder="请输入密码"
            type="password"
            value={password}
            onChange={e => this.handleChange(e,"password")}
            className={styles.cardInput}/>
          <Button
            type="primary"
            onClick={this.handleSubmit}
            className={styles.registerButton}>注册</Button>
          <div className={styles.hasAccount}>
            已有账户？
            <span className={styles.blueChar}>
              <Link to="/login">马上登录</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//
// }

// export default connect(mapStateToProps)(PcRegisterByCellphone);
export default PcRegisterByCellphone

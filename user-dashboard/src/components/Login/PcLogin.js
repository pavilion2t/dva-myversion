import React, { Component } from 'react';
import { Input, Button, Radio, Divider, Form } from 'antd';
import styles from './Login.css';

const FormItem = Form.Item;

class PcLogin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    const values = getFieldsValue();
    dispatch({
      type: 'login/login',
      payload: {
        username: values.username,
        password: values.password,
      },
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.background}>
        <div className={styles.card}>
          <div className={styles.registerOrLogin}>
            <div>账号登录</div>
            <div>扫码登录</div>
          </div>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入邮箱或手机号' }],
            })(
              <Input
                placeholder="请输入邮箱或手机号"
                className={styles.cardInput}
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                placeholder="请输入密码"
                type="password"
                className={styles.cardInput}
              />,
            )}
          </FormItem>

          <div className={styles.rememberOrForget}>
            <Radio>记住登录状态</Radio>
            <span className={styles.blueChar}>忘记密码</span>
          </div>
          <div className={styles.registerOrLogin}>
            <Button
              type="primary"
              onClick={this.handleSubmit}
              className={styles.registerButton}
            >登录</Button>
            <Button
              type="default"
              onClick={this.handleSubmit}
              className={styles.registerButton}
            >注册</Button>
          </div>
          <Divider>使用其他方式登录</Divider>
          <div className={styles.fourMethods}>
            <img alt={'login'} src={require('../../assets/pc/WeChat-grey.png')} />
            <img alt={'login'} src={require('../../assets/pc/QQ-grey.png')} />
            <img alt={'login'} src={require('../../assets/pc/Weibo-grey.png')} />
            <img alt={'login'} src={require('../../assets/pc/mobile-grey.png')} />
          </div>
        </div>
      </div>
    );
  }
}

export default PcLogin;

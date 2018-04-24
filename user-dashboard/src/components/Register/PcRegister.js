import React, { Component } from 'react';
import { Input, Button, Divider, Form } from 'antd';
import { Link } from 'dva/router';
import styles from './Register.css';

const FormItem = Form.Item;

class PcRegisterByCellphone extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.getVerifyCode = this.getVerifyCode.bind(this);
  }

  getVerifyCode() {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    const values = getFieldsValue();
    dispatch({
      type: 'register/send',
      payload: {
        phone: values.phone,
        phone_code: '86',
        purpose: 'register',
      },
    });
  }

  handleRegister() {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    const values = getFieldsValue();
    dispatch({
      type: 'register/signUp',
      payload: {
        phone_code: '86',
        phone: values.phone,
        verify_code: values.verifyCode,
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
            <div>手机注册</div>
            <div>邮箱注册</div>
          </div>
          <FormItem className={styles.cardInput}>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入手机号' }],
            })(
              <Input
                placeholder="请输入手机号"
                className={styles.cardInput}
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('verifyCode', {
              rules: [{ required: true, message: '请输入验证码' }],
            })(
              <Input
                placeholder="请输入验证码"
                className={styles.cardInput}
                suffix={
                  <div>
                    <Divider type="vertical" />
                    <p onClick={this.getVerifyCode}>获取验证码</p>
                  </div>
                }
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                placeholder="请输入密码"
                className={styles.cardInput}
                type="password"
              />,
            )}
          </FormItem>
          <Button
            type="primary"
            onClick={this.handleRegister}
            className={styles.registerButton}
          >注册</Button>
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

export default PcRegisterByCellphone;

import React, { Component } from 'react';
import styles from './Register.css';
import { connect } from 'dva';
import { Input, Button, Divider, Form, Row, Col } from 'antd';
import { Link } from 'dva/router';
// import { routerRedux } from 'dva/router';

const FormItem = Form.Item;

class PcRegisterByCellphone extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.getVerifyCode = this.getVerifyCode.bind(this)
    this.state = {
      phoneNumber: "",
      authCode: "",
      password: "",
    };
  }

  handleChange(e, name) {
    this.setState({
      [name]: e.target.value
    })
  }

  handleRegister() {
    console.log("handleRegister")
  }
  getVerifyCode() {
    console.log("getVerifyCode")
  }

  handleSubmit = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    const values = getFieldsValue();
    console.log('df');
    dispatch({
      type: 'register/send',
      payload: {
        phone: values.phone,
        phone_code: "86",
        purpose: "register",
      }
    })
  }

  render() {
    const { phoneNumber,authCode,password } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.background}>
        <div className={styles.card}>
          <div className={styles.registerOrLogin}>
            <div>手机注册</div>
            <div>邮箱注册</div>
          </div>
          <Form>
            <FormItem>
              {getFieldDecorator('phone', {
                rules: [{}],
              })(
                <Input placeholder="请输入手机号"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('confirm', {
                rules: [{}],
              })(
                <Row gutter={8}>
                  <Col span={16}>
                    {getFieldDecorator('confirm', {
                      rules: [{ required: true, message: '请输入验证码' }],
                    })(
                      <Input placeholder="请输入验证码"/>
                    )}
                  </Col>
                  <Col span={6}>
                    <Button onClick={() => {this.handleSubmit()}}>获取验证码</Button>
                  </Col>
                </Row>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{}],
              })(
                <Input placeholder="请输入密码"/>
              )}
            </FormItem>
            <Button
            type="primary"
            //onClick={}
            className={styles.registerButton}>注册</Button>
          </Form >
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

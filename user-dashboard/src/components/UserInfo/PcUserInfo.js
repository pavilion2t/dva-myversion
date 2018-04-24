import React, { Component } from 'react';
import { Card, Form, Input, Button, Divider, DatePicker } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 2 },
    sm: { span: 2, offset: -3 },
  },
  wrapperCol: {
    xs: { span: 6 },
    sm: { span: 6 },
  },
};
class PcUserInfo extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRegister = this.handleRegister.bind(this)
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <Card title="基本资料">
          <Form>
            <FormItem label="另客号" {...formItemLayout}>
              <Input />
            </FormItem>
            <FormItem label="昵称" {...formItemLayout}>
              <Input />
            </FormItem>
            <FormItem label="个人简介" {...formItemLayout}>
              <Input.TextArea />
            </FormItem>
            <FormItem label="常住地" {...formItemLayout}>
              <Input />
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              <DatePicker />
            </FormItem>
            <FormItem label="星座" {...formItemLayout}>
              <Input />
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              <Input />
            </FormItem>
            <Button type="primary">保存</Button>
          </Form>
          <Divider />
          <div>
            <div>登录密码： ******  修改</div>
            <div>绑定手机 ******  绑定</div>
            <div>修改邮箱 ******  修改</div>
            <div>个人主页 ******  修改</div>
            <div>大学学府 ******  修改</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default PcUserInfo;

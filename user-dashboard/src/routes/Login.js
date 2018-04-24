import React from 'react';
import { connect } from 'dva';
import { Form } from 'antd';
import styles from './Users.css';
import LoginComponent from '../components/Login/PcLogin';
import MainLayout from '../components/MainLayout/MainLayout';

class PcLogin extends React.Component {

  render() {
    const { form, dispatch, location } = this.props;
    return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <LoginComponent
            form={form}
            dispatch={dispatch}
          />
        </div>
      </MainLayout>
    );
  }
}

export default connect()(Form.create()(PcLogin));

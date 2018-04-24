import React from 'react';
import { connect } from 'dva';
import { Form } from 'antd';
import styles from './Users.css';
import RegisterComponent from '../components/Register/PcRegister';
import MainLayout from '../components/MainLayout/MainLayout';

class PcRegister extends React.Component {

  render() {
    const { form, dispatch, location } = this.props;
    return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <RegisterComponent
            form={form}
            dispatch={dispatch}
          />
        </div>
      </MainLayout>
    );
  }

}

export default connect()(Form.create()(PcRegister));

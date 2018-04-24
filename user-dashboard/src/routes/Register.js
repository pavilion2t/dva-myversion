import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import { Form } from 'antd';
import RegisterComponent from '../components/Register/PcRegister';
import MainLayout from '../components/MainLayout/MainLayout';

class  PcRegister extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    const { form, dispatch } = this.props;
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

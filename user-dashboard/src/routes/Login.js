import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import LoginComponent from '../components/Login/PcLogin';
import MainLayout from '../components/MainLayout/MainLayout';

function PcLogin({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <LoginComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(PcLogin);

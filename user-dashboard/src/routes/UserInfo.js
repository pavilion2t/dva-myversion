import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UserInfoComponent from '../components/UserInfo/PcUserInfo';
import MainLayout from '../components/MainLayout/MainLayout';

function UserInfo({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UserInfoComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(UserInfo);

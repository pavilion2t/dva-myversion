import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import RegisterComponent from '../components/Register/PcRegisterByCellphone';
import MainLayout from '../components/MainLayout/MainLayout';

function PcRegisterByCellphone({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <RegisterComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(PcRegisterByCellphone);

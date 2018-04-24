import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <h1 className={styles.title}>Welcome</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>get start</li>
        </ul>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      seletedKeys={[location.pathname]}
      mode="horizontal"
      theme="light"
    >
      <Menu.Item key="/">
        <Link to="/">
          <img alt={'logo'} src={require('../../assets/pc/logo.png')} />
        </Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <Link to="/register">单词小麦</Link>
      </Menu.Item>
      <Menu.Item key="/userInfo">
        <Link to="/userInfo">个人中心</Link>
      </Menu.Item>

    </Menu>
  );
}

export default Header;

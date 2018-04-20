import React from 'react';
import styles from './Users.css';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';
import { routerRedux } from 'dva/router';

function Users({ list: dataSource, total, page: current, loading, dispatch }) {

  function deleteHandler(id) {
    dispatch({
      type: 'users/remove',
      payload: id,
    })
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }))
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (test, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm
            title="Confirm to delete?"
            onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ]
  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}/>
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          onChange={pageChangeHandler}
          pageSize={3}/>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return { list, total, page, loading: state.loading.models.users, }
}

export default connect(mapStateToProps)(Users);

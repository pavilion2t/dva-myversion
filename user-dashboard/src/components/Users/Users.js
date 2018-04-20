import React from 'react';
import styles from './Users.css';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';

function Users({ list: dataSource, total, page: current, loading }) {

  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
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

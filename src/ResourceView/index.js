import React, { useContext } from 'react'
import { Table } from 'antd'
import { ConfigContext } from '../index'
import styles from './styles.module.css'
const index = () => {
  const {
    config: { resources, cellHeight, cellPadding }
  } = useContext(ConfigContext)
  const style = {
    height: cellHeight,
    padding: cellPadding
  }
  const columns = [
    {
      title: 'Nhân viên',
      dataIndex: 'name',
      key: 'id',
      render: (text, record) => <div style={style}>{text}</div>
    }
  ]
  return (
    <div>
      <Table
        columns={columns}
        pagination={false}
        size='large'
        dataSource={resources}
        bordered
        className={styles.resourceView}
      />
    </div>
  )
}

export default index

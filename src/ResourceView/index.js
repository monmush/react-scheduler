import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Nhân viên',
    dataIndex: 'name',
    key: 'id'
  }
]

const index = ({ resources }) => {
  return (
    <div>
      <Table
        columns={columns}
        pagination={false}
        size='large'
        dataSource={resources}
        bordered
      />
    </div>
  )
}

export default index

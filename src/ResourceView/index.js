import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Nhân viên',
    dataIndex: 'name',
    key: 'id'
  }
]

const data = [
  {
    name: 'Pham Duc Minh',
    id: 0
  },
  {
    name: 'Huynh Lam',
    id: 1
  },
  {
    name: 'Hoang Thi Thu Hien',
    id: 2
  },
  {
    name: 'Ngo Duc Duy',
    id: 3
  }
]
const index = () => {
  return (
    <div>
      <Table
        columns={columns}
        pagination={false}
        size='large'
        dataSource={data}
        bordered
      />
    </div>
  )
}

export default index

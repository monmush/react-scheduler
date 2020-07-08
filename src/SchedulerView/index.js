import React from 'react'
import { Table } from 'antd'

const index = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

const Header = () => {
  return (
    <Table
      size='large'
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
    />
  )
}

const data = [
  {
    id: 0
  },
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]
const columns = [
  {
    title: 'Thu 2',
    key: 0,
    render: () => {
      return <div>alo</div>
    }
  },
  {
    title: 'Thu 3',
    key: 1
  },
  {
    title: 'Thu 4',
    key: 2
  },
  {
    title: 'Thu 5',
    key: 3
  },
  {
    title: 'Thu 6',
    key: 4
  },
  {
    title: 'Thu 7',
    key: 5
  },
  {
    title: 'Chu nhat',
    key: 6
  }
]
export default index

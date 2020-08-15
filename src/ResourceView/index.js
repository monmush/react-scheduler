import React, { useContext } from 'react'
import { Table } from 'antd'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
import ResourceCellContent from './ResourceCellContent'
import Title from './Title'
const index = () => {
  const { resources } = useContext(SchedulerDataContext)

  const columns = [
    {
      title: Title,
      dataIndex: 'name',
      key: 'id',
      render: (text, record) => {
        return <ResourceCellContent text={text} record={record} />
      }
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
        className={styles.ResourceView}
      />
    </div>
  )
}

export default index

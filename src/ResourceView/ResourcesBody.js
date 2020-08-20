import React, { useContext } from 'react'
import ResourceCellContent from './ResourceCellContent'
import { SchedulerDataContext } from '../index'
import { Table } from 'antd'
import styles from './styles.module.css'
const ResourcesBody = () => {
  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'id',
      render: (text, record) => {
        return <ResourceCellContent text={text} record={record} />
      }
    }
  ]
  const { resources, windowWidth } = useContext(SchedulerDataContext)
  const responsiveWidth = { width: `${windowWidth * 0.16}px` }

  return (
    <div
      className={styles.ResourceViewContent}
      style={{ width: responsiveWidth }}
    >
      <div style={{ paddingBottom: 0 }}>
        <Table
          columns={columns}
          pagination={false}
          size='large'
          dataSource={resources}
          bordered={false}
        />
      </div>
    </div>
  )
}

export default ResourcesBody

import React, { useContext } from 'react'
import ResourceCellContent from './ResourceCellContent'
import { SchedulerDataContext } from '../index'
import { Table } from 'antd'
import styles from './styles.module.css'
import { ScrollSyncPane } from 'react-scroll-sync'

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
  const {
    resources,
    config: { resourcesViewWidth }
  } = useContext(SchedulerDataContext)

  return (
    <ScrollSyncPane group='1'>
      <div
        className={styles.ResourceViewBody}
        style={{ width: `${resourcesViewWidth}px`, maxHeight: '360px' }}
      >
        <div className={styles.ResourceViewBodyTableContainer}>
          <Table
            columns={columns}
            pagination={false}
            size='large'
            dataSource={resources}
            bordered={false}
          />
        </div>
      </div>
    </ScrollSyncPane>
  )
}

export default ResourcesBody

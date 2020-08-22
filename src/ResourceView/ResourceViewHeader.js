import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
import { Table } from 'antd'

const ResourcesHeader = () => {
  const {
    config: { resourceTitle, resourcesViewWidth }
  } = useContext(SchedulerDataContext)

  return (
    <div
      className={styles.ResourceViewHeader}
      style={{ width: `${resourcesViewWidth}px` }}
    >
      <div className={styles.ResourceViewHeaderTableContainer}>
        <Table
          columns={[{ title: resourceTitle }]}
          className={styles.ResourceViewHeaderTable}
          bordered={false}
        />
      </div>
    </div>
  )
}

export default ResourcesHeader

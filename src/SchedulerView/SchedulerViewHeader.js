import React, { useContext } from 'react'
import styles from './styles.module.css'
import { Table } from 'antd'
import { SchedulerDataContext } from '../index'

const SchedulerViewHeader = ({ days }) => {
  const {
    config: { schedulerViewWidth }
  } = useContext(SchedulerDataContext)

  const headerColumns = days.map((date) => ({
    title: date.format('ddd DD/MM'),
    width: schedulerViewWidth / 7
  }))

  return (
    <div className={styles.SchedulerViewHeader}>
      <div className={styles.SchedulerViewHeaderContainer}>
        <div style={{ width: `${schedulerViewWidth}px` }}>
          <Table
            columns={headerColumns}
            pagination={false}
            bordered={false}
            className={styles.ScheduleViewHeaderTable}
          />
        </div>
      </div>
    </div>
  )
}

export default SchedulerViewHeader

import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
import { Table } from 'antd'
const Title = () => {
  const {
    config: { resourceTitle },
    windowWidth
  } = useContext(SchedulerDataContext)

  const responsiveWidth = { width: `${windowWidth * 0.16}px` }
  return (
    <div
      className={styles.ResourceViewHeader}
      style={{ width: responsiveWidth }}
    >
      <div style={{ overflow: 'scroll hidden', margin: '0px' }}>
        <Table
          columns={[{ title: resourceTitle }]}
          className={styles.ResourcesTable}
          bordered={false}
        />
      </div>
    </div>
  )
}

export default Title

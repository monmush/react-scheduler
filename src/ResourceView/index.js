import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
import ResourcesHeader from './ResourcesHeader'
import ResourcesBody from './ResourcesBody'

const index = () => {
  const {
    config: { resourcesViewWidth }
  } = useContext(SchedulerDataContext)

  return (
    <div
      className={styles.ResourceView}
      style={{ width: `${resourcesViewWidth}px` }}
    >
      <ResourcesHeader />
      <ResourcesBody />
    </div>
  )
}

export default index

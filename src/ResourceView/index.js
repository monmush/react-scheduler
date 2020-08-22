import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
import ResourceViewHeader from './ResourceViewHeader'
import ResourceViewBody from './ResourceViewBody'

const index = () => {
  const {
    config: { resourcesViewWidth }
  } = useContext(SchedulerDataContext)

  return (
    <div
      className={styles.ResourceView}
      style={{ width: `${resourcesViewWidth}px` }}
    >
      <ResourceViewHeader />
      <ResourceViewBody />
    </div>
  )
}

export default index

import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
import ResourcesHeader from './ResourcesHeader'
import ResourcesBody from './ResourcesBody'

const index = () => {
  const { windowWidth } = useContext(SchedulerDataContext)
  const responsiveWidth = { width: `${windowWidth * 0.16}px` }

  return (
    <div className={styles.ResourceView} style={responsiveWidth}>
      <ResourcesHeader />
      <ResourcesBody />
    </div>
  )
}

export default index

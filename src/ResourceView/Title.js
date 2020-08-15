import React, { useContext } from 'react'
import { getCellContentHeight } from '../shared/Method'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
const Title = () => {
  const {
    config: { resourceTitle, cellHeight, cellPadding }
  } = useContext(SchedulerDataContext)
  return <div className={styles.Title}>{resourceTitle}</div>
}

export default Title

import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import { getCellContentHeight } from '../shared/Method'
import styles from './styles.module.css'
const Title = ({ date }) => {
  const {
    config: { cellHeight, cellPadding }
  } = useContext(SchedulerDataContext)
  //   const height = getCellContentHeight(cellHeight, cellPadding)
  //   const style = { height: height }
  return <div className={styles.Title}>{date.format('ddd DD/MM')}</div>
}

export default Title

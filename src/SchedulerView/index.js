import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import moment from 'moment'
import styles from './styles.module.css'
import SchedulerViewHeader from './SchedulerViewHeader'
import SchedulerViewBody from './SchedulerViewBody'

const Header = () => {
  const {
    config: { currentDate, schedulerViewWidth }
  } = useContext(SchedulerDataContext)
  const weekStart = moment(currentDate).startOf('week')
  const days = []
  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days'))
  }

  return (
    <div
      className={styles.SchedulerView}
      style={{
        width: `${schedulerViewWidth + 1}px`
      }}
    >
      <SchedulerViewHeader days={days} />
      <SchedulerViewBody days={days} />
    </div>
  )
}

export default Header

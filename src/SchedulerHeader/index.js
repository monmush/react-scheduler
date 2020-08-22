import React, { useContext } from 'react'
import { Row, Typography } from 'antd'
import styles from './styles.module.css'
import { SchedulerDataContext } from '../index'
import SchedulerDatePicker from './SchedulerDatePicker'
import ViewMode from './ViewMode'
import ShiftList from './ShiftList'

const { Title } = Typography

const SchedulerHeader = () => {
  const {
    config: { schedulerTitle }
  } = useContext(SchedulerDataContext)

  return (
    <Row className={styles.FullWidth}>
      <Title className={styles.Title}>{schedulerTitle}</Title>
      <Row justify='space-between' className={styles.FullWidth}>
        <Row justify='start' className={styles.FullWidth}>
          <ShiftList />
        </Row>
        <Row justify='space-between' className={styles.DateContainer}>
          <SchedulerDatePicker />
          <ViewMode />
        </Row>
      </Row>
    </Row>
  )
}

export default SchedulerHeader

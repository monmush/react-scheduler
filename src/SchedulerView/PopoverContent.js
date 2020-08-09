import React, { useContext } from 'react'
import { Badge, Row, Button } from 'antd'
import styles from './styles.module.css'
import { SchedulerDataContext } from '../index'
const PopoverContent = ({ event }) => {
  const {
    config: { cellPopoverWidth },
    firstAction,
    secondAction,
    firstActionName = 'Action 1',
    secondActionName = 'Action 2'
  } = useContext(SchedulerDataContext)
  const { shiftType, start, end } = event
  const style = {
    width: cellPopoverWidth
  }
  return (
    <div className={styles.popoverContent} style={style}>
      <div>
        <Badge color='blue' />
        {`${shiftType}`}
      </div>
      <p className={styles.popoverEventTime}>{`${start} - ${end}`}</p>
      <Row className={styles.popoverActions}>
        <Button type='text' onClick={firstAction}>
          {firstActionName}
        </Button>
        <Button type='text' onClick={secondAction}>
          {secondActionName}
        </Button>
      </Row>
    </div>
  )
}

export default PopoverContent

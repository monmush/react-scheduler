import React, { useState, useEffect, useContext } from 'react'
import { Col, Button, DatePicker } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './styles.module.css'
import moment from 'moment'
import { SchedulerDataContext } from '../index'

const SchedulerDatePicker = () => {
  // context
  const { updateConfig } = useContext(SchedulerDataContext)

  const now = moment()
  const [currentDate, setCurrentDate] = useState(now)

  // Previous time
  const onPrev = () => {
    setCurrentDate((prev) => moment(prev).subtract(1, 'week'))
  }

  // Next time
  const onNext = () => {
    setCurrentDate((prev) => moment(prev).add(1, 'week'))
  }

  // Listen to date change
  const dateChange = (date) => {
    setCurrentDate(date)
  }

  // Update the currentDate to global context
  useEffect(() => {
    updateConfig({ currentDate: currentDate })
  }, [currentDate])

  return (
    <Col>
      <Button
        onClick={onPrev}
        style={{ border: 'none' }}
        icon={<LeftOutlined />}
      />
      <DatePicker
        picker='week'
        className={styles.input}
        bordered={false}
        value={currentDate}
        onChange={dateChange}
        suffixIcon={null}
        allowClear={false}
      />
      <Button
        onClick={onNext}
        style={{ border: 'none' }}
        icon={<RightOutlined />}
      />
    </Col>
  )
}

export default SchedulerDatePicker

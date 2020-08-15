import React, { useEffect, useState, useContext } from 'react'
import { DatePicker, Button, Row, Radio, Col, Typography, Card } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './styles.module.css'
import moment from 'moment'
import { SchedulerDataContext } from '../index'
import TaskCard from './TaskCard'

const { Title } = Typography
const SchedulerHeader = () => {
  const now = moment()
  const [currentDate, setCurrentDate] = useState(now)
  const [mode, setMode] = useState('week')

  // context
  const {
    config: { view, schedulerTitle },
    updateConfig,
    shiftTypes
  } = useContext(SchedulerDataContext)

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

  // Handle view mode change
  const modeChange = (e) => {
    const { value } = e.target
    setMode(value)
  }

  // Update the currentDate to global context
  useEffect(() => {
    updateConfig({ currentDate: currentDate })
  }, [currentDate])

  // Render shift types
  const renderShiftTypes =
    !!shiftTypes &&
    shiftTypes.map((shift) => (
      <TaskCard
        key={shift.id}
        shiftType={shift.name}
        id={shift.id}
        start={shift.start}
        end={shift.end}
      />
    ))

  return (
    <Row className={styles.SchedulerHeader}>
      <Title className={styles.Title}>{schedulerTitle}</Title>
      <Row justify='space-between' className={styles.Block}>
        <Row justify='start' className={styles.Block}>
          {renderShiftTypes}
        </Row>
        <Row justify='space-between' className={styles.DateContainer}>
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
          <Col>
            <Radio.Group
              onChange={modeChange}
              value={mode}
              style={{ marginBottom: 8 }}
            >
              {view.map((item) => (
                <Radio.Button key={item.viewType} value={item.viewType}>
                  {item.viewName}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Col>
        </Row>
      </Row>
    </Row>
  )
}

export default SchedulerHeader

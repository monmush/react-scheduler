import React, { useEffect, useState, useContext } from 'react'
import { DatePicker, Button, Row, Radio, Col, Typography } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './styles.module.css'
import moment from 'moment'
import { ConfigContext } from '../index'

const { Title } = Typography
const SchedulerHeader = () => {
  const now = moment()
  const [currentDate, setCurrentDate] = useState(now)
  const [mode, setMode] = useState('week')
  const month = moment(currentDate).format('MMMM')

  // Context
  const { updateConfig } = useContext(ConfigContext)

  const onPrev = () => {
    setCurrentDate((prev) => moment(prev).subtract(1, 'week'))
  }

  const onNext = () => {
    setCurrentDate((prev) => moment(prev).add(1, 'week'))
  }

  const dateChange = (date) => {
    setCurrentDate(date)
  }

  const modeChange = (e) => {
    const { value } = e.target
    setMode(value)
  }

  useEffect(() => {
    updateConfig({ currentDate: currentDate })
  }, [currentDate])

  return (
    <Row justify='space-between'>
      <Col>
        <Title>{month}</Title>
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
          <Radio.Button value='day'>Ngày</Radio.Button>
          <Radio.Button value='week'>Tuần</Radio.Button>
          <Radio.Button value='month'>Tháng</Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  )
}

export default SchedulerHeader

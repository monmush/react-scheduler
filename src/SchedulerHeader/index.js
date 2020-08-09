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
  const month = moment(currentDate).format('MMMM')

  // context
  const { updateConfig, shiftTypes } = useContext(SchedulerDataContext)

  // quay lại mốc thời gian trước đó
  const onPrev = () => {
    setCurrentDate((prev) => moment(prev).subtract(1, 'week'))
  }

  // tiến tới mốc thời gian tiếp theo
  const onNext = () => {
    setCurrentDate((prev) => moment(prev).add(1, 'week'))
  }

  // listen thay đổi ngày tháng
  const dateChange = (date) => {
    setCurrentDate(date)
  }

  // thay đổi chế độ xem
  const modeChange = (e) => {
    const { value } = e.target
    setMode(value)
  }

  // cập nhật ngày tháng được chọn trong context
  useEffect(() => {
    updateConfig({ currentDate: currentDate })
  }, [currentDate])

  //
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
    <React.Fragment>
      <Title>{month}</Title>
      <Row justify='start'>{renderShiftTypes}</Row>
      <Row justify='space-between' style={{ marginTop: '2em' }}>
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
            <Radio.Button value='day'>Ngày</Radio.Button>
            <Radio.Button value='week'>Tuần</Radio.Button>
            <Radio.Button value='month'>Tháng</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default SchedulerHeader

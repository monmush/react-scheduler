import React, { useState, useContext } from 'react'
import { Col, Radio } from 'antd'
import { SchedulerDataContext } from '../index'

const ViewMode = () => {
  const [mode, setMode] = useState('week')

  // context
  const {
    config: { view }
  } = useContext(SchedulerDataContext)

  // Handle view mode change
  const modeChange = (e) => {
    const { value } = e.target
    setMode(value)
  }
  return (
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
  )
}

export default ViewMode

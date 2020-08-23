import React, { useState } from 'react'
import Scheduler from 'react-scheduler'
import 'react-scheduler/dist/index.css'
import 'react-scheduler/node_modules/antd/dist/antd.min.css'
import 'react-scheduler/node_modules/react-dnd'
import 'react-scheduler/node_modules/react-dnd-html5-backend'
import moment from 'react-scheduler/node_modules/moment'
import { message } from 'antd'
import { sampleEvents, sampleShiftTypes, sampleResources } from './SampleData'

const App = () => {
  const config = {
    cellHeight: '65'
  }

  const [data, setData] = useState({
    events: sampleEvents,
    shiftTypes: sampleShiftTypes,
    resources: sampleResources
  })
  const { events, shiftTypes, resources } = data

  const resourceCellContent = (record, resources, events) => {
    const dateFormat = 'DD/MM/YYYY'
    const startOfMonth = moment().startOf('month')
    const endOfMonth = moment().endOf('month')
    const resourceCellContentStyle = {
      fontSize: '10px',
      display: 'block'
    }
    const pStyle = {
      margin: '0'
    }
    
    const shiftInMonth = events.filter(
      (item) =>
        item.resource === record.name &&
        startOfMonth < moment(item.event.start, dateFormat) &&
        moment(item.event.start, dateFormat) < endOfMonth
    )
    return (
      <div style={resourceCellContentStyle}>
        <p style={pStyle}>{record.role}</p>
        <p style={pStyle}>{`Số ca trong tháng: ${shiftInMonth.length}`}</p>
      </div>
    )
  }
  const firstAction = () => {
    console.log('Action 1')
  }

  const secondAction = () => {
    console.log('Action 2')
  }

  const onShiftDrop = (event) => {
    message.success(event)
    setData((prev) => ({ ...prev, events: [...prev.events, event] }))
  }

  return (
    <div style={{ margin: '0' }}>
      <Scheduler
        events={events}
        resources={resources}
        shiftTypes={shiftTypes}
        displayAvatar={true}
        resourceCellContent={resourceCellContent}
        config={config}
        firstAction={firstAction}
        secondAction={secondAction}
        firstActionName={'Xoá'}
        secondActionName={'Đổi ca'}
        onShiftDrop={onShiftDrop}
      />
    </div>
  )
}

export default App

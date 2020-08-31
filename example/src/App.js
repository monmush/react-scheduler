import React, { useState } from 'react'
import Scheduler from 'react-scheduler'
import 'react-scheduler/dist/index.css'
import 'react-scheduler/node_modules/antd/dist/antd.min.css'
import { message } from 'antd'
import dayjs from 'dayjs'
import { sampleEvents, sampleShiftTypes, sampleResources } from './SampleData'
import './index.css'

const App = () => {
  const config = {
    cellHeight: '65',
    currentDate: '05/08/2020',
    dateFormat: 'DD-MM-YYYY'
  }
  const [data, setData] = useState({
    events: sampleEvents,
    shiftTypes: sampleShiftTypes,
    resources: sampleResources
  })
  const { events, shiftTypes, resources } = data

  const resourceCellContent = (record, resources, events) => {
    const dateFormat = 'DD-MM-YYYY'
    const startOfMonth = dayjs().startOf('month')
    const endOfMonth = dayjs().endOf('month')
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
        startOfMonth < dayjs(item.event.start, dateFormat) &&
        dayjs(item.event.start, dateFormat) < endOfMonth
    )
    return (
      <div style={resourceCellContentStyle}>
        <p style={pStyle}>{record.role}</p>
        <p style={pStyle}>{`Số ca trong tháng: ${shiftInMonth.length}`}</p>
      </div>
    )
  }
  const firstAction = () => {
    message.success('Action 1')
  }

  const secondAction = () => {
    message.success('Action 2')
  }

  const onShiftDrop = (event) => {
    message.success(JSON.stringify(event))
    setData((prev) => ({ ...prev, events: [...prev.events, event] }))
  }

  const getSchedulerData = (schedulerData) => {
    console.log(schedulerData)
  }

  return (
    <div className='ScheudlerContainer'>
      <Scheduler
        events={events} //required
        resources={resources} //required
        config={config}
        // shiftTypes={shiftTypes} //required
        // onShiftDrop={onShiftDrop} //required
        // displayAvatar={true}
        // resourceCellContent={resourceCellContent}
        // firstAction={firstAction}
        // secondAction={secondAction}
        // firstActionName={'Delete'}
        // secondActionName={'Swap'}
        // getSchedulerData={getSchedulerData}
      />
    </div>
  )
}

export default App

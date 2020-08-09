import React from 'react'
import Scheduler from 'react-scheduler'
import 'react-scheduler/dist/index.css'
import 'react-scheduler/node_modules/antd/dist/antd.min.css'
import 'react-scheduler/node_modules/react-dnd'
import 'react-scheduler/node_modules/react-dnd-html5-backend'
import moment from 'react-scheduler/node_modules/moment'

const App = () => {
  const config = {
    cellHeight: '65px'
  }
  const resources = [
    {
      name: 'Pham Duc Minh',
      role: 'Team Lead',
      id: 0
    },
    {
      name: 'Huynh Lam',
      id: 1,
      role: 'DevOps Engineer'
    },
    {
      name: 'Hoang Thi Thu Hien',
      id: 2,
      role: 'Admin'
    },
    {
      name: 'Ngo Duc Duy',
      id: 3,
      role: 'BASIS'
    }
  ]

  const shiftTypes = [
    {
      id: 0,
      name: 'Ca sáng'
    },
    {
      id: 1,
      name: 'Ca trưa'
    },
    {
      id: 2,
      name: 'Ca chiều'
    },
    {
      id: 3,
      name: 'Ca tối'
    }
  ]

  const events = [
    {
      id: 0,
      event: {
        start: '05/08/2020',
        end: '05/08/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Pham Duc Minh'
    },
    {
      id: 3,
      event: {
        start: '05/08/2020',
        end: '05/08/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 3,
      event: {
        start: '06/08/2020',
        end: '06/08/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 3,
      event: {
        start: '06/07/2020',
        end: '06/07/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 4,
      event: {
        start: '09/08/2020',
        end: '09/08/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Hoang Thi Thu Hien'
    },
    {
      id: 5,
      event: {
        start: '07/08/2020',
        end: '07/08/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Hoang Thi Thu Hien'
    }
  ]

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
        <p style={pStyle}>{`Số ca trong tháng ${shiftInMonth.length}`}</p>
      </div>
    )
  }
  return (
    <div style={{ padding: '10em' }}>
      <Scheduler
        events={events}
        resources={resources}
        shiftTypes={shiftTypes}
        resourceCellContent={resourceCellContent}
        displayAvatar={true}
        config={config}
      />
    </div>
  )
}

export default App

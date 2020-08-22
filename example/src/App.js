import React from 'react'
import Scheduler from 'react-scheduler'
import 'react-scheduler/dist/index.css'
import 'react-scheduler/node_modules/antd/dist/antd.min.css'
import 'react-scheduler/node_modules/react-dnd'
import 'react-scheduler/node_modules/react-dnd-html5-backend'
import moment from 'react-scheduler/node_modules/moment'

const App = () => {
  const config = {
    cellHeight: '65'
  }
  const resources = [
    {
      name: 'Pham Duc Minh Pham Duc Minh Pham Duc Minh',
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
      name: 'Ca sáng',
      start: '6:30',
      end: '11:30'
    },
    {
      id: 1,
      name: 'Ca trưa',
      start: '11:00',
      end: '16:00'
    },
    {
      id: 2,
      name: 'Ca chiều',
      start: '15:00',
      end: '20:00'
    },
    {
      id: 3,
      name: 'Ca tối',
      start: '19:00',
      end: '23:30'
    }
  ]

  const events = [
    {
      id: 0,
      event: {
        date: '05/08/2020',
        shiftType: 'Ca tối',
        start: '19:00',
        end: '23:30'
      },
      resource: 'Pham Duc Minh Pham Duc Minh Pham Duc Minh'
    },
    {
      id: 1,
      event: {
        date: '05/08/2020',
        start: '06:30',
        end: '11:30',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 2,
      event: {
        date: '06/08/2020',
        start: '06:30',
        end: '11:30',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 3,
      event: {
        date: '06/07/2020',
        start: '06:30',
        end: '11:30',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 4,
      event: {
        date: '09/08/2020',
        start: '06:30',
        end: '11:30',
        shiftType: 'Ca sáng'
      },
      resource: 'Hoang Thi Thu Hien'
    },
    {
      id: 5,
      event: {
        date: '07/08/2020',
        start: '06:30',
        end: '11:30',
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
      />
    </div>
  )
}

export default App

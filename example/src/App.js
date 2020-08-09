import React from 'react'
import Scheduler from 'react-scheduler'
import 'react-scheduler/dist/index.css'
import 'react-scheduler/node_modules/antd/dist/antd.min.css'
import 'react-scheduler/node_modules/react-dnd'
import 'react-scheduler/node_modules/react-dnd-html5-backend'

const App = () => {
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
        start: '25/07/2020',
        end: '25/07/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Pham Duc Minh'
    },
    {
      id: 3,
      event: {
        start: '22/07/2020',
        end: '22/07/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 3,
      event: {
        start: '24/07/2020',
        end: '24/07/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 3,
      event: {
        start: '25/07/2020',
        end: '25/07/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Huynh Lam'
    },
    {
      id: 4,
      event: {
        start: '20/07/2020',
        end: '20/07/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Hoang Thi Thu Hien'
    },
    {
      id: 5,
      event: {
        start: '24/07/2020',
        end: '24/07/2020',
        shiftType: 'Ca sáng'
      },
      resource: 'Hoang Thi Thu Hien'
    }
  ]

  const resourceCellContent = (record, resources, events) => {
    return <span>{record.role}</span>
  }
  return (
    <div style={{ padding: '10em' }}>
      <Scheduler
        events={events}
        resources={resources}
        shiftTypes={shiftTypes}
        resourceCellContent={resourceCellContent}
        displayAvatar={true}
      />
    </div>
  )
}

export default App

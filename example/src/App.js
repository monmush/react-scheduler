import React from 'react'
import { ExampleComponent } from 'react-scheduler'
import 'react-scheduler/dist/index.css'
import 'react-scheduler/node_modules/antd/dist/antd.min.css'
import 'react-scheduler/node_modules/react-dnd'
import 'react-scheduler/node_modules/react-dnd-html5-backend'

const App = () => {
  const data = {
    resources: [
      {
        name: 'Pham Duc Minh',
        id: 0
      },
      {
        name: 'Huynh Lam',
        id: 1
      },
      {
        name: 'Hoang Thi Thu Hien',
        id: 2
      },
      {
        name: 'Ngo Duc Duy',
        id: 3
      }
    ],
    shiftTypes: [
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
  }
  return (
    <div style={{ padding: '10em' }}>
      <ExampleComponent data={data} />
    </div>
  )
}

export default App

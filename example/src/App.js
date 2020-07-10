import React from 'react'

import { ExampleComponent } from 'react-scheduler'
import 'react-scheduler/dist/index.css'
import 'react-scheduler/node_modules/antd/dist/antd.min.css'

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
    ]
  }
  return (
    <div style={{ padding: '10em' }}>
      <ExampleComponent data={data} />
    </div>
  )
}

export default App

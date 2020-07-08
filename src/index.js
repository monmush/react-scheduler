import React from 'react'
import '../node_modules/antd/dist/antd.min.css'
import SchedulerHeader from './SchedulerHeader/index'
import ResourceView from './ResourceView/index'
import SchedulerView from './SchedulerView/index'
export const ExampleComponent = () => {
  return (
    <div style={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <SchedulerHeader />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width='200px' colSpan='1'>
              <ResourceView />
            </td>
            <td colSpan='5'>
              <SchedulerView />
            </td>
          </tr>
        </tbody>
      </table>

      <h1>Example</h1>
    </div>
  )
}

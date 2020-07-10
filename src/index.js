import React, { createContext, useState } from 'react'
import '../node_modules/antd/dist/antd.min.css'
import SchedulerHeader from './SchedulerHeader/index'
import ResourceView from './ResourceView/index'
import SchedulerView from './SchedulerView/index'
import moment from 'moment'
import 'moment/locale/vi'

export const ConfigContext = createContext(null)

export const ExampleComponent = ({ data = {} }) => {
  const [config, setConfig] = useState({
    currentDate: moment(),
    locale: 'vi'
  })
  moment.locale(config.locale)

  const { resources } = data
  const updateConfig = (args) => {
    setConfig((prev) => ({ ...prev, ...args }))
  }

  const configContextValue = { config: config, updateConfig: updateConfig }

  return (
    <ConfigContext.Provider value={configContextValue}>
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
                <ResourceView resources={resources} />
              </td>
              <td colSpan='5'>
                <SchedulerView />
              </td>
            </tr>
          </tbody>
        </table>

        <h1>Example</h1>
      </div>
    </ConfigContext.Provider>
  )
}

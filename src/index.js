import React, { createContext, useState } from 'react'
import '../node_modules/antd/dist/antd.min.css'
import styles from './styles.module.css'
import SchedulerHeader from './SchedulerHeader/index'
import ResourceView from './ResourceView/index'
import SchedulerView from './SchedulerView/index'
import { DndProvider } from 'react-dnd'
import moment from 'moment'
import 'moment/locale/vi'
import { HTML5Backend } from 'react-dnd-html5-backend'
export const ConfigContext = createContext(null)

export const ExampleComponent = ({ data = {} }) => {
  const { resources, shiftTypes } = data

  // config
  const [config, setConfig] = useState({
    currentDate: moment(),
    locale: 'vi',
    shiftTypes: shiftTypes,
    resources: resources,
    cellBgColor: '#ffffff',
    cellBgHoverColor: '#fafafa',
    cellHeight: '55px',
    cellPadding: '16px'
  })
  moment.locale(config.locale)

  const updateConfig = (args) => {
    setConfig((prev) => ({ ...prev, ...args }))
  }

  const configContextValue = { config: config, updateConfig: updateConfig }

  return (
    <DndProvider backend={HTML5Backend}>
      <ConfigContext.Provider value={configContextValue}>
        <div className={styles.scheduler}>
          <SchedulerHeader />
          <table>
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
        </div>
      </ConfigContext.Provider>
    </DndProvider>
  )
}

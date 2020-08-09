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
import { message } from 'antd'

export const SchedulerDataContext = createContext(null)

const Scheduler = ({
  resources,
  shiftTypes,
  events: userEvents,
  resourceCellContent,
  displayAvatar,
  config: userConfig,
  firstAction,
  secondAction,
  firstActionName,
  secondActionName
}) => {
  // Create an array of resources
  const resourcesList = resources.map((item) => item.name)

  // Add slotId attribute depend on the resouce
  const formattedUserEvents =
    !!userEvents &&
    userEvents.map((evt) => ({
      ...evt,
      slotId: resourcesList.indexOf(evt.resource)
    }))

  // List of events which will be displayed on the scheduler
  const [events, setEvents] = useState(formattedUserEvents)

  // config
  const [config, setConfig] = useState({
    currentDate: moment(),
    locale: 'vi',
    cellBgColor: '#ffffff',
    cellBgHoverColor: '#fafafa',
    cellHeight: '55px',
    cellPadding: '8px 16px 8px 16px',
    dateFormat: 'DD/MM/YYYY',
    cellPopoverWidth: '200px',
    ...userConfig
  })
  moment.locale(config.locale)

  const addEvent = (newEvent) => {
    message.success(JSON.stringify(newEvent))
    setEvents((prev) => [...prev, newEvent])
  }
  const updateConfig = (args) => {
    setConfig((prev) => ({ ...prev, ...args }))
  }

  const SchedulerData = {
    // settings
    config: config,
    resources: resources,
    events: events,
    shiftTypes: shiftTypes,
    resourcesList: resourcesList,
    displayAvatar: displayAvatar,

    // actions
    updateConfig: updateConfig,
    addEvent: addEvent,
    resourceCellContent: resourceCellContent,
    firstAction: firstAction,
    secondAction: secondAction,
    firstActionName: firstActionName,
    secondActionName: secondActionName
  }
  console.log(SchedulerData)
  return (
    <DndProvider backend={HTML5Backend}>
      <SchedulerDataContext.Provider value={SchedulerData}>
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
      </SchedulerDataContext.Provider>
    </DndProvider>
  )
}

export default Scheduler

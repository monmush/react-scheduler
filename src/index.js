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
  // Determine window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

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
    locale: 'en',
    schedulerTitle: 'React scheduler',
    schedulerWidth: windowWidth * 0.9,
    resourcesViewWidth: Math.floor(windowWidth * 0.9 * 0.15),
    schedulerViewWidth: Math.floor((windowWidth * 0.9 * 0.8) / 7) * 7,
    cellBgColor: '#ffffff',
    cellBgHoverColor: '#fafafa',
    cellHeight: 55,
    cellPadding: [8, 12, 8, 12],
    dateFormat: 'DD/MM/YYYY',
    cellPopoverWidth: '200px',
    resourceTitle: 'Resources',
    view: [{ viewName: 'Week', viewType: ViewTypes.Week }],
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
    windowWidth: windowWidth,

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
  const { schedulerWidth, resourcesViewWidth, schedulerViewWidth } = config
  return (
    <DndProvider backend={HTML5Backend}>
      <SchedulerDataContext.Provider value={SchedulerData}>
        <div
          className={styles.Scheduler}
          style={{ width: `${schedulerWidth}px` }}
        >
          <table>
            <thead>
              <tr>
                <td colSpan='2'>
                  <SchedulerHeader />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: `${resourcesViewWidth}px` }}>
                  <ResourceView />
                </td>
                <td style={{ width: `${schedulerViewWidth}px` }}>
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

export const SchedulerDataContext = createContext(null)
export const ViewTypes = {
  Day: 'day',
  Week: 'week',
  Month: 'month'
}
export default Scheduler

import React, { createContext, useState, useEffect } from 'react'
import '../node_modules/antd/dist/antd.min.css'
import styles from './styles.module.css'
import SchedulerHeader from './SchedulerHeader/index'
import ResourceView from './ResourceView/index'
import SchedulerView from './SchedulerView/index'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import moment from 'moment'

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
  secondActionName,
  onShiftDrop,
  getSchedulerData
}) => {
  // Determine window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () =>
    setWindowWidth(Math.floor(window.innerWidth))
  )

  // Create an array of resources
  const resourcesList = resources.map((item) => item.name)

  // Add slotId attribute depend on the resouce
  const formattedUserEvents =
    !!userEvents &&
    userEvents.map((evt) => ({
      ...evt,
      slotId: resourcesList.indexOf(evt.resource)
    }))

  // Calculate scheduler size base on viewport
  const schedulerWidth = windowWidth * 0.9
  const resourcesViewWidth =
    Math.floor(windowWidth * 0.9) -
    Math.floor((windowWidth * 0.9 * 0.8) / 7) * 7
  const schedulerViewWidth = Math.floor((windowWidth * 0.9 * 0.8) / 7) * 7

  // Config
  const [config, setConfig] = useState({
    currentDate: moment(),
    locale: 'en',
    schedulerTitle: 'React simple scheduler',
    schedulerWidth: windowWidth * 0.9,
    resourcesViewWidth: resourcesViewWidth,
    schedulerViewWidth: schedulerViewWidth,
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

  const updateConfig = (args) => {
    setConfig((prev) => ({ ...prev, ...args }))
  }

  const SchedulerData = {
    // Settings
    config: config,
    resources: resources,
    events: formattedUserEvents,
    shiftTypes: shiftTypes,
    resourcesList: resourcesList,
    displayAvatar: displayAvatar,
    windowWidth: windowWidth,

    // Actions
    updateConfig: updateConfig,
    onShiftDrop: onShiftDrop,
    resourceCellContent: resourceCellContent,
    firstAction: firstAction,
    secondAction: secondAction,
    firstActionName: firstActionName || 'Action 1',
    secondActionName: secondActionName || 'Action 2'
  }

  // Scheduler data getter function
  useEffect(() => {
    getSchedulerData(SchedulerData)
  }, [SchedulerData])

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

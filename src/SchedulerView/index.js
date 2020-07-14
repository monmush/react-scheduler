import React, { useContext } from 'react'
import { Table } from 'antd'
import { ConfigContext } from '../index'
import moment from 'moment'
import Cell from './Cell'
import styles from './styles.module.css'

const index = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

const Header = () => {
  const {
    config: { currentDate, resources, dateFormat, events }
  } = useContext(ConfigContext)
  const getCurrentWeekDays = () => {
    const weekStart = moment(currentDate).startOf('week')

    const days = []
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'))
    }
    const renderColumns = days.map((day) => ({
      title: day.format('ddd DD/MM'),
      key: day.format(dateFormat),
      dataIndex: 'event',
      render: (record) => {
        // Only display record that has the exactly startDate (vertical matching)
        try {
          if (record.event.start === day.format(dateFormat)) {
            return (
              <Cell>
                <span>{record.event.shiftType}</span>
              </Cell>
            )
          }
        } catch (ignore) {}

        return <Cell />
      }
    }))
    return renderColumns
  }
  const columnContent = []

  // Matching between slotId and resourceName
  for (let i = 0; i < resources.length; i++) {
    columnContent.push({
      slotId: i,
      event: {}
    })
  }

  // Create an array of all resources
  const resourcesList = resources.map((item) => item.name)

  // Add slodId property to existed events
  const eventsWithSlotId = events.map((item) => {
    const slotId = resourcesList.indexOf(item.resource)
    return {
      ...item,
      event: {
        ...item.event,
        slotId: slotId
      }
    }
  })

  // Add the event with the correct slotId to the columns (horizontal matching)
  for (let i = 0; i < eventsWithSlotId.length; i++) {
    columnContent[eventsWithSlotId[i].event.slotId].event = eventsWithSlotId[i]
  }

  return (
    <Table
      size='large'
      columns={getCurrentWeekDays()}
      dataSource={columnContent}
      pagination={false}
      bordered
      className={styles.schedulerView}
    />
  )
}

export default index

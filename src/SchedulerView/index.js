import React, { useContext } from 'react'
import { Table } from 'antd'
import { SchedulerData } from '../index'
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
    config: { currentDate, dateFormat },
    events,
    resources,
    resourcesList
  } = useContext(SchedulerData)
  const getCurrentWeekDays = () => {
    const weekStart = moment(currentDate).startOf('week')
    console.log(events)
    const days = []
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'))
    }

    const renderColumns = days.map((day) => ({
      title: day.format('ddd DD/MM'),
      key: day.format(dateFormat),
      dataIndex: 'event',
      render: (text, record, index) => {
        const { event } = record
        if (event.length !== 0) {
          return event.map((evt, i) => {
            try {
              if (
                evt.start === day.format(dateFormat) &&
                evt.slotId === index
              ) {
                return (
                  <Cell key={index} cellData={record} date={day}>
                    {evt.shiftType + evt.resource}
                  </Cell>
                )
              }
              return null
            } catch (ignore) {}
          })
        }
        return <Cell key={index} cellData={record} date={day} />
        // Only display record that has the exactly startDate and slotId
      }
    }))
    return renderColumns
  }
  const columnContent = []

  // Initialize columns data with slotId and empty event
  for (let i = 0; i < resources.length; i++) {
    columnContent.push({
      slotId: i,
      event: [],
      resource: resourcesList[i]
    })
  }

  events.map((evt) => {
    columnContent[evt.slotId].event.push({
      ...evt.event,
      id: evt.id,
      slotId: evt.slotId,
      resource: evt.resource
    })
  })

  // for (let i = 0; i < events.length; i++) {
  //   columnContent[i].id = events[i].id
  //   columnContent[events[i].slotId].event = events[i].event
  // }

  console.log(columnContent)

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

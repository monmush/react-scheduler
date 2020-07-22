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

    const days = []
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'))
    }

    const renderColumns = days.map((day) => ({
      title: day.format('ddd DD/MM'),
      key: day.format(dateFormat),
      dataIndex: 'event',
      render: (text, record, index) => {
        // Only display record that has the exactly startDate and slotId
        try {
          if (
            record.event.start === day.format(dateFormat) &&
            record.slotId === index
          ) {
            return (
              <Cell cellData={record} date={day}>
                <span>{record.event.shiftType}</span>
              </Cell>
            )
          }
        } catch (ignore) {}

        return <Cell cellData={record} date={day} />
      }
    }))
    return renderColumns
  }
  const columnContent = []

  // Initialize columns data with slotId and empty event
  for (let i = 0; i < resources.length; i++) {
    columnContent.push({
      slotId: i,
      event: {},
      resource: resourcesList[i]
    })
  }

  for (let i = 0; i < events.length; i++) {
    columnContent[i].id = events[i].id
    columnContent[events[i].slotId].event = events[i].event
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

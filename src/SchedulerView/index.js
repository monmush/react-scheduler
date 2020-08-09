import React, { useContext } from 'react'
import { Table, Popover } from 'antd'
import { SchedulerDataContext } from '../index'
import moment from 'moment'
import Cell from './Cell'
import styles from './styles.module.css'
import PopoverContent from './PopoverContent'
const index = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

const Header = () => {
  const {
    config: { currentDate, dateFormat, cellPopoverWidth },
    events,
    resources,
    resourcesList
  } = useContext(SchedulerDataContext)
  const getCurrentWeekDays = () => {
    const weekStart = moment(currentDate).startOf('week')
    const days = []
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'))
    }

    const renderColumns = days.map((date) => ({
      title: date.format('ddd DD/MM'),
      key: date.format(dateFormat),
      dataIndex: 'event',
      render: (text, record, index) => {
        const { event } = record
        const eventOnThisDate = event.filter(
          (item) => item.date === date.format(dateFormat)
        )
        const eventExisted = eventOnThisDate.length !== 0
        if (eventExisted) {
          return event.map((evt, i) => {
            try {
              if (
                evt.date === date.format(dateFormat) &&
                evt.slotId === index
              ) {
                return (
                  <Popover
                    content={<PopoverContent event={evt} />}
                    placement='bottom'
                    trigger='hover'
                  >
                    <div>
                      <Cell key={index} cellData={record} date={date}>
                        {evt.shiftType}
                      </Cell>
                    </div>
                  </Popover>
                )
              }
              return null
            } catch (ignore) {}
          })
        }
        return <Cell key={index} cellData={record} date={date} />
        // Only display record that has the exactly startDate and slotId
      }
    }))
    return renderColumns
  }
  const columnData = []

  // Initialize columns data with slotId and empty event

  for (let i = 0; i < resources.length; i++) {
    columnData.push({
      slotId: i,
      event: [],
      resource: resourcesList[i]
    })
  }

  events.map((evt) => {
    columnData[evt.slotId].event.push({
      ...evt.event,
      id: evt.id,
      slotId: evt.slotId,
      resource: evt.resource
    })
  })

  return (
    <Table
      size='large'
      columns={getCurrentWeekDays()}
      dataSource={columnData}
      pagination={false}
      bordered
      className={styles.schedulerView}
    />
  )
}

export default index

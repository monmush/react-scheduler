import React, { useContext } from 'react'
import styles from './styles.module.css'
import { SchedulerDataContext } from '../index'
import { Table, Popover } from 'antd'
import Cell from './Cell'
import PopoverContent from './PopoverContent'
import { ScrollSyncPane } from 'react-scroll-sync'
const SchedulerViewBody = ({ days }) => {
  const {
    config: { dateFormat, schedulerViewWidth },
    events,
    resources,
    resourcesList
  } = useContext(SchedulerDataContext)

  const getCurrentWeekDays = () => {
    const renderColumns = days.map((date) => ({
      title: '',
      key: date.format(dateFormat),
      dataIndex: 'event',
      render: (text, record, index) => {
        const { event } = record
        const eventOnThisDate = event.filter(
          (item) => item.date === date.format(dateFormat)
        )
        const eventExisted = eventOnThisDate.length !== 0
        // Only display record that has the exactly startDate and slotId
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

  events.forEach((evt) => {
    columnData[evt.slotId].event.push({
      ...evt.event,
      id: evt.id,
      slotId: evt.slotId,
      resource: evt.resource
    })
  })

  return (
    <ScrollSyncPane group='1'>
      <div className={styles.SchedulerViewContent}>
        <div
          style={{
            width: `${schedulerViewWidth}px`,
            maxHeight: '360px'
          }}
        >
          <Table
            size='large'
            columns={getCurrentWeekDays()}
            dataSource={columnData}
            pagination={false}
            bordered={false}
            className={styles.ScheduleViewBodyTable}
          />
        </div>
      </div>
    </ScrollSyncPane>
  )
}

export default SchedulerViewBody

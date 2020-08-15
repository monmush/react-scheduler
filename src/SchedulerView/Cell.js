import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { SchedulerDataContext } from '../index'
import { v4 as uuidv4 } from 'uuid'
import { getPadding, getCellHeight } from '../shared/Method'
import { message } from 'antd'
const Cell = ({ cellData = {}, children, date }) => {
  const { slotId, resource } = cellData
  console.log(cellData)
  // react-dnd
  const [{ isOver }, drop] = useDrop({
    accept: 'shift',
    drop: (item, monitor) => {
      const droppedEvent = {
        id: uuidv4(),
        event: {
          date: date.format(dateFormat),
          start: item.start,
          end: item.end,
          shiftType: item.shiftType
        },
        slotId: slotId,
        resource: resource
      }
      const existedShiftInCell =
        cellData.event.filter((evt) => evt.date === date.format(dateFormat))
          .length !== 0
      // Check if shift already existed
      // existed => not allow to drop new shift to the cell
      if (cellData.length === 0 || existedShiftInCell === false) {
        addEvent(droppedEvent)
      } else {
        message.error('Employee already has a shift on the date')
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  // context
  const {
    config: {
      cellBgColor,
      cellBgHoverColor,
      cellHeight,
      cellPadding,
      dateFormat
    },
    addEvent
  } = useContext(SchedulerDataContext)

  const style = {
    backgroundColor: isOver ? cellBgHoverColor : cellBgColor,
    height: getCellHeight(cellHeight),
    padding: getPadding(cellPadding)
  }
  return (
    <div ref={drop} style={style}>
      {children}
    </div>
  )
}

export default Cell

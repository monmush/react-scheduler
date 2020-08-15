import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { SchedulerDataContext } from '../index'
import { v4 as uuidv4 } from 'uuid'
import { getPadding, getCellHeight } from '../shared/Method'

const Cell = ({ cellData = {}, children, date }) => {
  const { slotId, resource } = cellData
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
      addEvent(droppedEvent)
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
  console.log(style)
  return (
    <div ref={drop} style={style}>
      {children}
    </div>
  )
}

export default Cell

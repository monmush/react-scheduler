import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { SchedulerData } from '../index'
import { v4 as uuidv4 } from 'uuid'

const Cell = ({ cellData = {}, children, date }) => {
  const { slotId, resource } = cellData

  // react-dnd
  const [{ isOver }, drop] = useDrop({
    accept: 'shift',
    drop: (item, monitor) => {
      const droppedEvent = {
        id: uuidv4(),
        event: {
          start: date.format(dateFormat),
          end: date.format(dateFormat),
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
  } = useContext(SchedulerData)

  const style = {
    backgroundColor: isOver ? cellBgHoverColor : cellBgColor,
    height: cellHeight,
    padding: cellPadding
  }

  return (
    <div ref={drop} style={style}>
      {children}
    </div>
  )
}

export default Cell

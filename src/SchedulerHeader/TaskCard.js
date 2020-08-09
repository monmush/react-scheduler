import React from 'react'
import { useDrag } from 'react-dnd'

const TaskCard = ({ shiftType, id, start, end }) => {
  // useDrag
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'shift',
      id: id,
      shiftType: shiftType,
      start: start,
      end: end
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      style={{
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
        padding: '.8em',
        marginRight: '1em'
      }}
      ref={drag}
    >
      {shiftType}
    </div>
  )
}

export default TaskCard

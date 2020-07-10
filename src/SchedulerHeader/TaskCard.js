import React from 'react'
import { useDrag } from 'react-dnd'

const TaskCard = ({ shiftName, id }) => {
  // useDrag
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'shift', id: id },
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
      {shiftName}
    </div>
  )
}

export default TaskCard

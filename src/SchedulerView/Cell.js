import React from 'react'
import { useDrop } from 'react-dnd'

const Cell = () => {
  const [{ isOver }, drop] = useDrop({
    accept: 'shift',
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })
  return (
    <div ref={drop} style={{ backgroundColor: isOver ? '#bfbfbf' : '#ffffff' }}>
      alo
    </div>
  )
}

export default Cell

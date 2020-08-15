import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './styles.module.css'
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
    <div className={styles.TaskCard} ref={drag}>
      {shiftType}
    </div>
  )
}

export default TaskCard

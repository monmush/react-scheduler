import React, { useContext } from 'react'
import { useDrag } from 'react-dnd'
import styles from './styles.module.css'
import { SchedulerDataContext } from '../index'

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

const ShiftList = () => {
  const { shiftTypes } = useContext(SchedulerDataContext)
  return (
    <React.Fragment>
      {!!shiftTypes &&
        shiftTypes.map((shift) => (
          <TaskCard
            key={shift.id}
            shiftType={shift.name}
            id={shift.id}
            start={shift.start}
            end={shift.end}
          />
        ))}
    </React.Fragment>
  )
}

export default ShiftList

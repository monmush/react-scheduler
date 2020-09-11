import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { SchedulerDataContext } from '../index'

import { getPadding, getCellHeight } from '../shared/Method'
import { message } from 'antd'
import styles from './styles.module.css'

const Cell = ({ cellData = {}, children, date: workingDate }) => {
  const { slotId, resource, resourceId } = cellData

  // context
  const {
    config: {
      cellBgColor,
      cellBgHoverColor,
      cellHeight,
      cellPadding,
      dateFormat,
      schedulerViewWidth
    },
    onShiftDrop
  } = useContext(SchedulerDataContext)
  const date = workingDate.format(dateFormat)
  // react-dnd
  const [{ isOver }, drop] = useDrop({
    accept: 'shift',
    drop: (item, monitor) => {
      const existedShiftInCell =
        cellData.event.filter(
          (evt) => evt.date === workingDate.format(dateFormat)
        ).length !== 0
      // Check if shift already existed
      // existed => not allow to drop new shift to the cell
      if (cellData.length === 0 || existedShiftInCell === false) {
        onShiftDrop(date, item, slotId, resource, resourceId)
      } else {
        message.error('Employee already had a shift')
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  const style = {
    backgroundColor: isOver ? cellBgHoverColor : cellBgColor,
    height: getCellHeight(cellHeight),
    padding: getPadding(cellPadding),
    width: schedulerViewWidth / 7
  }
  return (
    <div ref={drop} style={style} className={styles.Cell}>
      {children}
    </div>
  )
}

export default Cell

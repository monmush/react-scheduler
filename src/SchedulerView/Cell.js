import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ConfigContext } from '../index'

const Cell = () => {
  // react-dnd
  const [{ isOver }, drop] = useDrop({
    accept: 'shift',
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  // context
  const {
    config: { cellBgColor, cellBgHoverColor, cellHeight, cellPadding }
  } = useContext(ConfigContext)

  const style = {
    backgroundColor: isOver ? cellBgHoverColor : cellBgColor,
    height: cellHeight,
    padding: cellPadding
  }

  return (
    <div ref={drop} style={style}>
      alo
    </div>
  )
}

export default Cell

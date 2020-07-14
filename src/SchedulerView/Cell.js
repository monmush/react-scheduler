import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ConfigContext } from '../index'

const Cell = ({ children }) => {
  // react-dnd
  const [{ isOver }, drop] = useDrop({
    accept: 'shift',
    drop: (item, monitor) => console.log(item, monitor),
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
      {children}
    </div>
  )
}

export default Cell

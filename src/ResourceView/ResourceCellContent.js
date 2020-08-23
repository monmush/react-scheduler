import React, { useContext } from 'react'
import { SchedulerDataContext } from '../index'
import { Row, Col, Avatar } from 'antd'
import styles from './styles.module.css'
const ResourceCellContent = ({ text, record }) => {
  const {
    config: { cellHeight },
    displayAvatar,
    resourceCellContent,
    resources,
    events
  } = useContext(SchedulerDataContext)

  // Styles
  const style = {
    height: `${cellHeight}px`
  }
  const content = resourceCellContent(record, resources, events)

  const renderCellContent = (
    <Col>
      <p>{text}</p>
      {resourceCellContent ? content : null}
    </Col>
  )

  const renderAvatar = displayAvatar ? (
    <Col style={{ marginRight: '1em' }}>
      <Avatar size='default'>{text[0]}</Avatar>
    </Col>
  ) : null

  return (
    <Row
      style={style}
      className={styles.ResourceCellContent}
      align='middle'
      justify='start'
    >
      {renderAvatar}
      {renderCellContent}
    </Row>
  )
}

export default ResourceCellContent

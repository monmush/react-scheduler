import React, { useContext, useCallback } from 'react'
import { SchedulerDataContext } from '../index'
import { getPadding } from '../shared/Method'
import { Row, Col, Avatar } from 'antd'
import styles from './styles.module.css'
const ResourceCellContent = ({ text, record }) => {
  const {
    config: { cellHeight, cellPadding },
    displayAvatar,
    resourceCellContent,
    resources,
    events
  } = useContext(SchedulerDataContext)

  // Styles
  const style = {
    height: `${cellHeight}px`,
    padding: '10px'
  }

  // Table content
  const renderCellContent = useCallback(
    (record) => {
      if (resourceCellContent) {
        return resourceCellContent(record, resources, events)
      }
      return null
    },
    [resourceCellContent, events]
  )

  return (
    <Row style={style} className={styles.ResourceCellContent} justify='start'>
      {displayAvatar ? (
        <Col span={6}>
          <Avatar size='default'>{text[0]}</Avatar>
        </Col>
      ) : null}
      <Col span={18}>
        <p>{text}</p>
        {renderCellContent ? renderCellContent(record) : null}
      </Col>
    </Row>
  )
}

export default ResourceCellContent

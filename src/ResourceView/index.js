import React, { useContext, useCallback } from 'react'
import { Table, Row, Col, Avatar } from 'antd'
import { SchedulerDataContext } from '../index'
import styles from './styles.module.css'
const index = () => {
  const {
    config: { cellHeight, cellPadding },
    resources,
    resourceCellContent,
    events,
    displayAvatar
  } = useContext(SchedulerDataContext)

  const style = {
    height: cellHeight,
    padding: cellPadding
  }

  const renderCellContent = useCallback(
    (record) => {
      if (resourceCellContent) {
        return resourceCellContent(record, resources, events)
      }
      return null
    },
    [resourceCellContent, events]
  )

  const columns = [
    {
      title: 'Nhân viên',
      dataIndex: 'name',
      key: 'id',
      render: (text, record) => {
        return (
          <Row style={style} justify='start'>
            {displayAvatar ? (
              <Col>
                <Avatar
                  style={{
                    verticalAlign: 'middle',
                    marginRight: '10px'
                  }}
                  size='default'
                >
                  {text[0]}
                </Avatar>
              </Col>
            ) : null}
            <Col>
              <div>{text}</div>
              {renderCellContent ? renderCellContent(record) : null}
            </Col>
          </Row>
        )
      }
    }
  ]

  return (
    <div>
      <Table
        columns={columns}
        pagination={false}
        size='large'
        dataSource={resources}
        bordered
        className={styles.resourceView}
        style={{ width: 230 }}
      />
    </div>
  )
}

export default index

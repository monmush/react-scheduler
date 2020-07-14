import React, { useContext } from 'react'
import { Table } from 'antd'
import { ConfigContext } from '../index'
import styles from './styles.module.css'
const index = ({ resourceCellContent }) => {
  const {
    config: { resources, cellHeight, cellPadding }
  } = useContext(ConfigContext)
  const style = {
    height: cellHeight,
    padding: cellPadding
  }

  const renderCellContent = () => {
    if (resourceCellContent) {
      return resourceCellContent()
    }
    return null
  }

  const columns = [
    {
      title: 'Nhân viên',
      dataIndex: 'name',
      key: 'id',
      render: (text, record) => {
        return (
          <div style={style}>
            <div>{text}</div>
            <div>{renderCellContent()}</div>
          </div>
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
      />
    </div>
  )
}

export default index

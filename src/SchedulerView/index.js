import React, { useContext } from 'react'
import { Table } from 'antd'
import { ConfigContext } from '../index'
import moment from 'moment'
import Cell from './Cell'
import styles from './styles.module.css'

const index = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

const Header = () => {
  const {
    config: { currentDate }
  } = useContext(ConfigContext)
  const getCurrentWeekDays = () => {
    const weekStart = moment(currentDate).startOf('week')

    const days = []
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'))
    }
    const renderColumns = days.map((day) => ({
      title: day.format('ddd DD/MM'),
      key: 0,
      render: () => <Cell />
    }))
    return renderColumns
  }
  return (
    <Table
      size='large'
      columns={getCurrentWeekDays()}
      dataSource={data}
      pagination={false}
      bordered
      className={styles.schedulerView}
    />
  )
}

const data = [
  {
    id: 0
  },
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]
export default index

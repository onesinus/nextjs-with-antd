import Layout from './general/layout'
import { fetchTodos } from '../helpers/fetch-data'
import { Button, Table } from 'antd'
import { useState } from 'react'

const Todo = (props) => {
    const [columns, setColumns] = useState([
        {
            title: 'userId',
            dataIndex: 'userId',
            key: 'userId',            
        },
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',            
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',            
        },
        {
            title: 'is complete?',
            dataIndex: 'completed',
            key: 'completed',
            render: (text, record) => (
                <span>{record.completed ? '✓': '✗'}</span>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (text, record) => (
                <Button type="primary">Detail</Button>
            ),
        }
    ])
    return (
        <Layout
            content={(
                <Table dataSource={props.data} columns={columns} />
            )}
        />
    )
}

export default Todo

export async function getStaticProps(context) {
    const data = await fetchTodos()

    return {
        props: {
          data
        }
      }
}
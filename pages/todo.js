import Layout from './general/layout'
import { fetchTodos } from '../helpers/fetch-data'
import { Table, Modal } from 'antd'
import getColumn from '../columns/todo'
import { useEffect, useState } from 'react'

const Todo = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [columns, setColumns] = useState([])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };    

    useEffect(() => {
        if (props.data) {
            setIsLoading(false)
        }
    }, [props.data])

    useEffect(() => {
        setColumns(getColumn(showModal))
    }, [])

    return (
        <Layout
            content={(
                <>
                    <Table
                        rowKey='id'
                        dataSource={props.data} 
                        columns={columns} 
                        loading={isLoading}
                    />
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </>
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
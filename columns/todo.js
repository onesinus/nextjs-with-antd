import { Button } from 'antd'

export default function getColumn(onClickDetail) {
    return [
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
                <Button onClick={onClickDetail} type="primary">Detail</Button>
            ),
        }
    ]    
}
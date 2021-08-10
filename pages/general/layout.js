import { useRouter } from 'next/router'
import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

import 'antd/dist/antd.css';

const LayoutComponent = (props) => {
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item 
                    key="1" 
                    icon={<UserOutlined />} 
                    onClick={() => router.push('/')}
                >
                    Home
                </Menu.Item>
                <Menu.Item 
                    key="2" 
                    icon={<VideoCameraOutlined />}
                    onClick={() => router.push('/todo')}
                >
                    Todo
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
                })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 515,
                }}
            >
                {props.content}
            </Content>
            </Layout>
        </Layout>        
    )
}

export default LayoutComponent
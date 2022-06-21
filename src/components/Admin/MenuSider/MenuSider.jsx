import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';

import './MenuSider.scss'

export default function MenuSider() {
    const { Sider } = Layout


    return <Sider className='admin-sider'>
        <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={["1"]}
            items={[
                {
                    key: '1',
                    icon:
                        <Link to={"/admin"}>
                            <MenuOutlined />
                        </Link>,
                    label: 'Menú'
                },
                {
                    key: '2',
                    icon:
                        <Link to={"/"}>
                            <HomeOutlined />
                        </Link>,
                    label: 'Home'
                }
            ]}
        />
    </Sider>
}
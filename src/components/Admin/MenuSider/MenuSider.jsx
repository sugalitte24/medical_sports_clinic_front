import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';

import './MenuSider.scss'

export default function MenuSider(props) {
    const { Sider } = Layout
    const { menuCollapsed } = props;
    const { pathname } = useLocation();

    return (
        <Sider className='admin-sider' collapsed={menuCollapsed}>
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={pathname}
                items={[
                    {
                        key: '/admin',
                        icon:
                            <Link to={"/admin"}>
                                <MenuOutlined />
                            </Link>,
                        label: 'Menú'
                    },
                    {
                        key: '/admin/users',
                        icon:
                            <Link to={"/admin/users"}>
                                <HomeOutlined />
                            </Link>,
                        label: 'Usuarios'
                    }
                ]}
            />
        </Sider>
    )
}
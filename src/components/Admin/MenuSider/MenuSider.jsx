import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { MenuOutlined, MedicineBoxFilled, UserOutlined } from '@ant-design/icons';

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
                        key: '/admin/patients',
                        icon:
                            <Link to={"/admin/patients"}>
                                <MedicineBoxFilled />
                            </Link>,
                        label: 'Pacientes'
                    },
                    {
                        key: '/admin/users',
                        icon:
                            <Link to={"/admin/users"}>
                                <UserOutlined />
                            </Link>,
                        label: 'Usuarios'
                    },
                    {
                        key: '/admin/webMenu',
                        icon:
                            <Link to={"/admin/menuWeb"}>
                                <MenuOutlined />
                            </Link>,
                        label: 'Menú'
                    }
                ]}
            />
        </Sider>
    )
}
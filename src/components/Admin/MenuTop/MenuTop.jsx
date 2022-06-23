import React from "react";
import './MenuTop.scss'
import { Button } from "antd";
import { MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from '@ant-design/icons';
import CmdLogo from '../../../assets/img/logo.png'

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={CmdLogo}
                    alt="Steven Peña"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                </Button>
            </div>

            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log('off')}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}
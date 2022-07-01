import React, { useState } from "react";
import { Layout } from 'antd'
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import useAuth from "../hooks/useAuth";
import './LayoutAdmin.scss'
import { Navigate } from "react-router-dom";

export default function LayoutAdmin(props) {
    const { children } = props;
    const { Header, Content, Footer } = Layout;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { user, isLoading } = useAuth();

    if (!user && !isLoading) {
        return (
            <Navigate to="/admin/login" replace={true} />
        )
    }

    if (user && !isLoading) {
        return (
            < Layout >
                <MenuSider menuCollapsed={menuCollapsed} />
                <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
                    <Header className="layout-admin__header">
                        <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                    </Header>
                    <Content className="layout-admin__content">{children}</Content>
                    <Footer className="layout-admin__footer">Footer Steven</Footer>
                </Layout>
            </Layout >
        );
    } else {
        return null
    }

}
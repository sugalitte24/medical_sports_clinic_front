import React from "react";
import { Layout } from 'antd'
import './LayoutAdmin.scss'
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";

export default function LayoutAdmin(props) {
    console.log(props)
    const { children } = props;
    const { Header, Content, Footer } = Layout;

    return (
        < Layout >
            <MenuSider />
            <Layout className="layout-admin">
                <Header className="layout-admin__header">{/* menú top */}</Header>
                <MenuTop />
                <Content className="layout-admin__content">{children}</Content>
                <Footer className="layout-admin__footer">Footer Steven</Footer>
            </Layout>
        </Layout >
    );
}